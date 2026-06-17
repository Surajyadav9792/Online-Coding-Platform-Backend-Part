const mongoose = require('mongoose');

const dbURI = "mongodb+srv://surajyadav2823510_db_user:Suraj9792@cluster0.d47p0dh.mongodb.net/Leetcode";

const problemSchema = new mongoose.Schema({}, { strict: false });
const Problem = mongoose.model('problems', problemSchema);

async function run() {
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB.");
    
    // Check problems count
    const count = await Problem.countDocuments();
    console.log(`Number of problems in 'problems' collection: ${count}`);
    
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections in DB:", collections.map(c => c.name));
    
    process.exit(0);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

run();
