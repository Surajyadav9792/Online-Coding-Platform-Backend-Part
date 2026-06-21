const mongoose=require('mongoose');
require('dotenv').config();
// Establish connection to MongoDB Atlas database.
// Mongoose queues database operations internally until the connection is active.
async function main() {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
}
module.exports=main; 