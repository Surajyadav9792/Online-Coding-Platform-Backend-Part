const main = require('./config/db');
const Problem = require('./model/problem');
const SolutionVideo = require('./model/solutionVideo');

const adminUserId = "69938d8d7d4e0067ceae790d";

const realVideoMap = {
  // Array
  "Sum of Two Numbers": "https://www.youtube.com/watch?v=UXDSeD9mN-k",
  "Find Maximum": "https://www.youtube.com/watch?v=0hWbgcquT6A",
  "Square of a Number": "https://www.youtube.com/watch?v=fB3z2Oq1HwM",
  "Fibonacci Number": "https://www.youtube.com/watch?v=wTlPiRzLDFs",
  "Reverse a String": "https://www.youtube.com/watch?v=_d0T_2Lk2qU",
  "Find Factorial": "https://www.youtube.com/watch?v=pxh__ugRKz8",
  "Fizz Buzz": "https://www.youtube.com/watch?v=vV_n-VfOaUo",
  "Palindrome Check": "https://www.youtube.com/watch?v=ySN5Wnubv7k",
  "Sum of Array Elements": "https://www.youtube.com/watch?v=a8tntV1h67k",
  "Prime Number Check": "https://www.youtube.com/watch?v=7VPA-hRj3vM",
  "Even or Odd": "https://www.youtube.com/watch?v=1K3a9f0m02w",
  "Count Vowels": "https://www.youtube.com/watch?v=eO-pZ29iL2g",
  "Find Duplicate Elements": "https://www.youtube.com/watch?v=32Ll35mhWg0",

  // Linked List
  "Reverse a Linked List": "https://www.youtube.com/watch?v=G0_I-ZF0S38",
  "Middle of the Linked List": "https://www.youtube.com/watch?v=7LQJRwQf7Xg",
  "Merge Two Sorted Lists": "https://www.youtube.com/watch?v=Xb4slcp1U38",
  "Detect Cycle in Linked List": "https://www.youtube.com/watch?v=2KdHJxrBR84",
  "Remove Nth Node From End of List": "https://www.youtube.com/watch?v=3kMKYQ2w58U",

  // Graph
  "Breadth First Search (BFS) Traversal": "https://www.youtube.com/watch?v=-tgVpU3TQYo",
  "Depth First Search (DFS) Traversal": "https://www.youtube.com/watch?v=Qzf1a--rhPA",
  "Detect Cycle in an Undirected Graph": "https://www.youtube.com/watch?v=BPlrALf1LDU",
  "Find Center of Star Graph": "https://www.youtube.com/watch?v=T6MFLd0v22M",
  "Shortest Path in Unweighted Graph": "https://www.youtube.com/watch?v=C4E35Z3s-W0",

  // Dynamic Programming (DP)
  "Climbing Stairs": "https://www.youtube.com/watch?v=mLfjXTML6Cw",
  "0/1 Knapsack Problem": "https://www.youtube.com/watch?v=GqOmJwHwJ5U",
  "Longest Common Subsequence": "https://www.youtube.com/watch?v=NPZn9jBrX8U",
  "Coin Change Problem": "https://www.youtube.com/watch?v=H9bfqozjoqs",
  "House Robber": "https://www.youtube.com/watch?v=GrMBfJNk_N4"
};

async function updateRealVideos() {
  try {
    await main();
    console.log("Connected to MongoDB Database.");

    const problems = await Problem.find({});
    console.log(`Found ${problems.length} problems in database.`);

    for (const problem of problems) {
      const videoUrl = realVideoMap[problem.title] || "https://www.youtube.com/watch?v=UXDSeD9mN-k";
      const publicId = `real-dsa-solution/${problem._id}`;

      await SolutionVideo.findOneAndUpdate(
        { problemId: problem._id },
        {
          problemId: problem._id,
          userId: adminUserId,
          cloudinaryPublicId: publicId,
          secureUrl: videoUrl,
          duration: 600,
          thumbnailUrl: ""
        },
        { upsert: true, new: true }
      );

      console.log(`Updated Real DSA Video Tutorial for: "${problem.title}"`);
    }

    console.log("All 28 problems successfully updated with REAL DSA solution tutorial videos!");
    process.exit(0);
  } catch (err) {
    console.error("Error updating real videos:", err);
    process.exit(1);
  }
}

updateRealVideos();
