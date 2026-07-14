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

main()
  .then(async () => {
    console.log("DB connected");
    await client.connect();
    console.log("Redis connected");

    // Initialize Judge Engine Worker
    initJudgeWorker();

    app.listen(process.env.PORT, () => {
      console.log("Server listening at port : " + process.env.PORT);
    });

  })
  .catch(err => console.log("Error Occured: " + err));

