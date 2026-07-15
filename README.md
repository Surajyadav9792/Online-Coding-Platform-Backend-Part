# ⚙️ Online Coding Platform — Backend Engine

Core backend REST API server, automated code execution engine, and asynchronous task worker queue. Powering real-time compiler actions, user management, and MongoDB model states.

---

## 🚀 Deployed Endpoint
* **API Live Server:** [https://leetcode-backend-ml5e.onrender.com](https://leetcode-backend-ml5e.onrender.com)
* **Status Endpoint:** [https://leetcode-backend-ml5e.onrender.com/ping](https://leetcode-backend-ml5e.onrender.com/ping)
* **Keep-Alive Status:** 🟢 Active (Programmatic self-ping every 13 minutes)

---

## 🛠️ Tech Stack & Services
* **Server Framework:** Node.js + Express
* **Database Object Modeling:** MongoDB + Mongoose
* **Caching & Queueing:** Redis Cloud + BullMQ
* **Task Worker:** Embedded high-concurrency Judge worker (runs compilations in sandboxed shell)
* **Media Storage:** Cloudinary SDK (for solution explanation videos)

---

## 🔒 Backend Features & Key Workflows

### 1. Authentication & Security
* **JWT Integration:** Custom cookie-parser setup stores tokens inside secure, HTTP-only cookie headers.
* **Token Blocklist (Redis):** On logout, user tokens are blocklisted in Redis with automated expiry tags matching the JWT duration.
* **Role-Based Access Control (RBAC):** Middleware validation protects routes based on user roles (`user` or `admin`).

### 2. High-Speed Judge Worker Engine (`judgeWorker.js`)
* **BullMQ Queue Management:** Backend routes queue compile requests into Redis.
* **Embedded Worker Concurrency:** Runs up to 25 test cases concurrently!
* **Global Compilation Cache:** Saves hash profiles of compiled sources (C++ binaries / Java classes) to skip redundant builds.
* **Support Range:** C++ (GCC/g++), Java (JDK/javac), Node.js.

### 3. API Response Projective Tuning
* Strict projection `.select()` and Mongoose `.lean()` optimizations bypass heavy Document overhead for user-authorization queries and problem details loading.

---

## 📂 Backend Directory Structure

```text
├── config/            # Mongoose MongoDB client & Redis configs
├── controllers/       # Business logic (auth, problem creator, submissions, video metadata)
├── model/             # Schemas (user.js, problem.js, submission.js, solutionVideo.js)
├── routes/            # Route maps (userAuth, problemCreator, submit, GemniAi, videoCreator)
├── userMiddleware/    # Auth and RBAC middleware (userAuthMiddleware, adminAuthMiddleware)
├── utils/             # Queue handlers, compiler wrappers, and validation schemas
└── src/index.js       # Express server boot & keep-alive loops
```

---

## ⚙️ Installation & Environment Variables

### Requirements
* Node.js (v18+)
* MongoDB database instance
* Running Redis Server

### Setup Steps
1. Navigate to the folder:
   ```bash
   cd Backend
   ```
2. Install project dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file at the root of `Backend` and add:
   ```env
   BACKEND_URL="http://localhost:3000"
   PORT=3000
   DB_CONNECTION_STRING="your_mongodb_atlas_uri"
   JWT_KEY="your_jwt_signature_secret"
   REDIS_PASSWORD="your_redis_cloud_password"
   REDIS_HOST="your_redis_cloud_host_address"
   REDIS_PORT=your_redis_port
   CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
   CLOUDINARY_API_KEY="your_cloudinary_key"
   CLOUDINARY_API_SECRET="your_cloudinary_secret"
   ```
4. Start the server:
   ```bash
   npm start
   ```
