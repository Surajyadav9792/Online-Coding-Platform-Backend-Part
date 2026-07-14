// judgeWorker.js - Embedded Judge Engine Worker for Backend
const { Worker } = require('bullmq');
const IORedis = require('ioredis');
const os = require('os');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

let docker = null;
try {
  const Docker = require('dockerode');
  docker = new Docker(
    os.platform() === 'win32'
      ? { socketPath: '//./pipe/docker_engine' }
      : { socketPath: '/var/run/docker.sock' }
  );
} catch (e) {
  docker = null;
}

const QUEUE_NAME = process.env.QUEUE_NAME || 'submissions';
const EXECUTION_TIMEOUT_MS = Number(process.env.EXECUTION_TIMEOUT_MS) || 5000;
const SUPPORTED_LANGUAGES = new Set(['node', 'javascript', 'c++', 'cpp', 'java', '54', '62', '63']);

const redisConnection = new IORedis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
  password: process.env.REDIS_PASSWORD || undefined,
  maxRetriesPerRequest: null,
  enableReadyCheck: true,
});

function createErrorResult(stderr, executionTime = 0) {
  return {
    status: 'Runtime Error',
    output: '',
    stderr,
    execution_time: executionTime,
  };
}

function validateJobData(job) {
  const { language = 'node', sourceCode, stdin = '', expectedOutput } = job.data || {};

  if (!sourceCode || typeof sourceCode !== 'string') {
    return { error: createErrorResult('sourceCode is required') };
  }

  const langKey = String(language).toLowerCase();
  if (!SUPPORTED_LANGUAGES.has(langKey)) {
    return { error: createErrorResult(`Unsupported language: ${language}`) };
  }

  return { input: { sourceCode, stdin, expectedOutput, language: langKey } };
}

function resolveStatus({ timedOut, exitCode, stdout, expectedOutput }) {
  if (timedOut) return 'TLE';
  if (exitCode !== 0) return 'Runtime Error';
  if (expectedOutput !== undefined) {
    return stdout.trim() === String(expectedOutput).trim()
      ? 'Accepted'
      : 'Wrong Answer';
  }
  return 'Accepted';
}

async function runCodeExecution({ sourceCode, stdin, expectedOutput, language }) {
  const startTime = Date.now();
  const langKey = String(language || 'node').toLowerCase();

  let stdout = '';
  let stderr = '';
  let exitCode = 0;
  let timedOut = false;
  let tempFile = '';

  try {
    if (langKey === 'c++' || langKey === 'cpp' || langKey === '54') {
      const randId = `${Date.now()}_${Math.random().toString(36).substring(7)}`;
      tempFile = path.join(os.tmpdir(), `sub_${randId}.cpp`);
      const outBin = path.join(os.tmpdir(), `out_${randId}${os.platform() === 'win32' ? '.exe' : ''}`);
      fs.writeFileSync(tempFile, sourceCode, 'utf8');

      try {
        execSync(`g++ -O2 "${tempFile}" -o "${outBin}"`, { encoding: 'utf8', stdio: 'pipe' });
      } catch (compileErr) {
        return {
          status: 'Compilation Error',
          output: '',
          stderr: compileErr.stderr || compileErr.message,
          execution_time: Date.now() - startTime,
        };
      }

      stdout = execSync(`"${outBin}"`, {
        input: stdin || '',
        timeout: EXECUTION_TIMEOUT_MS,
        maxBuffer: 10 * 1024 * 1024,
        encoding: 'utf8'
      });
      try { fs.unlinkSync(outBin); } catch {}

    } else if (langKey === 'java' || langKey === '62') {
      const randDir = path.join(os.tmpdir(), `java_${Date.now()}_${Math.random().toString(36).substring(7)}`);
      fs.mkdirSync(randDir, { recursive: true });
      tempFile = path.join(randDir, 'Main.java');
      fs.writeFileSync(tempFile, sourceCode, 'utf8');

      try {
        execSync(`javac "${tempFile}"`, { encoding: 'utf8', stdio: 'pipe' });
      } catch (compileErr) {
        return {
          status: 'Compilation Error',
          output: '',
          stderr: compileErr.stderr || compileErr.message,
          execution_time: Date.now() - startTime,
        };
      }

      stdout = execSync(`java -cp "${randDir}" Main`, {
        input: stdin || '',
        timeout: EXECUTION_TIMEOUT_MS,
        maxBuffer: 10 * 1024 * 1024,
        encoding: 'utf8'
      });

    } else {
      // JavaScript / Node.js
      tempFile = path.join(os.tmpdir(), `sub_${Date.now()}_${Math.random().toString(36).substring(7)}.js`);
      fs.writeFileSync(tempFile, sourceCode, 'utf8');

      stdout = execSync(`node "${tempFile}"`, {
        input: stdin || '',
        timeout: EXECUTION_TIMEOUT_MS,
        maxBuffer: 10 * 1024 * 1024,
        encoding: 'utf8',
        env: { ...process.env, NODE_OPTIONS: '' }
      });
    }
  } catch (err) {
    exitCode = err.status || 1;
    stdout = err.stdout || '';
    stderr = err.stderr || err.message || 'Execution Error';
    if (err.code === 'ETIMEDOUT') {
      timedOut = true;
      stderr = `Time Limit Exceeded (${EXECUTION_TIMEOUT_MS}ms).`;
    }
  } finally {
    try { if (tempFile && fs.existsSync(tempFile)) fs.unlinkSync(tempFile); } catch {}
  }

  return {
    status: resolveStatus({ timedOut, exitCode, stdout, expectedOutput }),
    output: stdout,
    stderr,
    execution_time: Date.now() - startTime,
  };
}

async function processSubmission(job) {
  console.log(`[JudgeWorker] 🎯 Processing Job ID: ${job.id}`);
  const validated = validateJobData(job);
  if (validated.error) return validated.error;

  const result = await runCodeExecution(validated.input);
  console.log(`[JudgeWorker] ✅ Job ${job.id} Status: ${result.status} | Time: ${result.execution_time}ms`);
  return result;
}

function initJudgeWorker() {
  const worker = new Worker(QUEUE_NAME, processSubmission, {
    connection: redisConnection,
    lockDuration: 60000,
  });

  worker.on('active', (job) => {
    console.log(`[JudgeWorker] 🔄 Active job ${job.id}`);
  });

  worker.on('completed', (job, result) => {
    console.log(`[JudgeWorker] 🎉 Finished job ${job.id}: ${result.status}`);
  });

  worker.on('failed', (job, err) => {
    console.error(`[JudgeWorker] ❌ Failed job ${job?.id}:`, err?.message);
  });

  console.log(`🚀 Embedded Judge Worker initialized on queue "${QUEUE_NAME}"`);
  return worker;
}

module.exports = { initJudgeWorker };
