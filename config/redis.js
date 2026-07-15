const { createClient } = require('redis');
require('dotenv').config();
const redisClient = createClient({
    username: 'default',
    password:process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port:process.env.REDIS_PORT,
        connectTimeout: 5000,       // 5s max to connect
        commandTimeout: 3000,       // 3s max per command
        reconnectStrategy: (retries) => {
            if (retries > 10) return new Error('Redis max retries reached');
            return Math.min(retries * 200, 3000); // exponential backoff, max 3s
        }
    }
});

// Prevent unhandled errors from crashing the server
redisClient.on('error', (err) => {
    console.error('Redis Client Error:', err.message);
});

module.exports=redisClient;