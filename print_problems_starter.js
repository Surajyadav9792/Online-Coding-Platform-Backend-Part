const main = require('./config/db');
const Problem = require('./model/problem');

async function test() {
  try {
    await main();
    console.log("Connected to DB.");
    const problems = await Problem.find({});
    console.log(`Found ${problems.length} problems.`);
    for (const p of problems) {
      console.log(`Problem: "${p.title}"`);
      console.log(`startCode:`, JSON.stringify(p.startCode, null, 2));
      console.log(`-----------------------------------`);
    }
    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

test();
