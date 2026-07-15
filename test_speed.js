const { initJudgeWorker } = require('./utils/judgeWorker');
const worker = initJudgeWorker();
const { submitBatch, submitoken } = require('./utils/fetch_language_id');

async function testSpeed() {
  console.time('Full Batch Execution Time');
  const code = `const fs = require('fs');
const nums = fs.readFileSync(0, 'utf-8').trim().split(/\\s+/).map(Number);
const set = new Set(nums);
console.log(set.size !== nums.length ? "true" : "false");`;

  const batch = Array.from({ length: 13 }, () => ({
    source_code: code,
    language_id: 63,
    stdin: "1 2 3 1",
    expected_output: "true"
  }));

  const res = await submitBatch(batch);
  const tokens = res.map(v => v.token);
  const out = await submitoken(tokens);

  console.timeEnd('Full Batch Execution Time');
  console.log(`Passed ${out.filter(x => x.status_id === 3).length} of 13 Test Cases!`);
  await worker.close();
  process.exit(0);
}

setTimeout(testSpeed, 1000);
