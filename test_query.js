const main = require('./config/db');
const Problem = require('./model/problem');

async function test() {
  try {
    await main();
    console.log("Connected successfully to DB.");
    const problems = await Problem.find({});
    console.log("Found problems count:", problems.length);
    if (problems.length > 0) {
      console.log("First problem title:", problems[0].title);
    }
    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

test();
