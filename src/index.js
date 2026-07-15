const express = require('express'); //(npm i express)
const app = express();
require('dotenv').config(); //(npm i dotenv)
const main = require('../config/db');
const cookieParser = require('cookie-parser'); //(npm i cookie-parser)
const authRouter = require('../routes/userAuth');
const client = require('../config/redis');
const problemRouter = require('../routes/problemCreator')
const submitRouter = require('../routes/submit');
const aiRouter = require('../routes/GemniAi');
const cors = require("cors");

app.use(cors({
  origin: process.env.FRONTEND_URL || "https://frontend-peach-ten-81.vercel.app",
  credentials: true
}));
const videoRouter = require('../routes/videoCreator');
const { initJudgeWorker } = require('../utils/judgeWorker');

app.use(express.json());
app.use(cookieParser());

// Lightweight ping endpoint for container keep-alive
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

app.use("/user", authRouter);
app.use("/problem", problemRouter);
app.use("/submission", submitRouter);
app.use("/ai", aiRouter);
app.use('/video', videoRouter);

// ⚡ Start server IMMEDIATELY — don't block on DB/Redis connections.
// Mongoose queues operations internally until connection is ready,
// so APIs will work as soon as the connection completes in background.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server listening at port : " + PORT);
});

// Connect DB and Redis in background (non-blocking)
main()
  .then(() => {
    console.log("DB connected");
  })
  .catch(err => console.error("DB Connection Error:", err.message));

client.connect()
  .then(() => {
    console.log("Redis connected");
    // Initialize Judge Engine Worker only after Redis is ready
    initJudgeWorker();
  })
  .catch(err => console.error("Redis Connection Error:", err.message));

// ⚡ KEEP-ALIVE: Prevent free-tier hosting (Render/Railway) from sleeping.
// Free tier spins down after ~15 min of inactivity. This self-ping every 13 min
// keeps the server alive so users never face a 30-60s cold start.
const KEEP_ALIVE_URL = process.env.BACKEND_URL || `http://localhost:${PORT}`;
setInterval(() => {
  const https = KEEP_ALIVE_URL.startsWith('https') ? require('https') : require('http');
  https.get(`${KEEP_ALIVE_URL}/ping`, (res) => {
    console.log(`[Keep-Alive] Pinged: ${res.statusCode}`);
  }).on('error', (err) => {
    console.error('[Keep-Alive] Ping failed:', err.message);
  });
}, 13 * 60 * 1000); // Every 13 minutes
