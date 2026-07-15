const mongoose=require('mongoose');
require('dotenv').config();
// Establish connection to MongoDB Atlas database.
// Mongoose queues database operations internally until the connection is active.
async function main() {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
        serverSelectionTimeoutMS: 5000,   // 5s max to find a server (default 30s)
        connectTimeoutMS: 10000,          // 10s max to establish connection
        socketTimeoutMS: 45000,           // 45s max for socket inactivity
        maxPoolSize: 10,                  // efficient connection pool
    });
}
module.exports=main; 