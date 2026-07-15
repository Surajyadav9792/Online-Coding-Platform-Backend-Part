const cloudinary = require('cloudinary').v2;
const main = require('./config/db');
const Problem = require('./model/problem');
const SolutionVideo = require('./model/solutionVideo');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const adminUserId = "69938d8d7d4e0067ceae790d"; // Admin ID

// Sample high quality DSA tutorial video URLs for Cloudinary upload
const sampleVideoUrl = "https://res.cloudinary.com/demo/video/upload/dog.mp4";

async function populateVideos() {
  try {
    await main();
    console.log("Connected to MongoDB Database.");

    const problems = await Problem.find({});
    console.log(`Found ${problems.length} problems in database.`);

    for (const problem of problems) {
      // Check if video already exists
      const existingVideo = await SolutionVideo.findOne({ problemId: problem._id });

      if (!existingVideo) {
        console.log(`Uploading video tutorial for problem: "${problem.title}"...`);

        const publicId = `leetcode-solution/${problem._id}/${adminUserId}_${Date.now()}`;

        // Upload sample video URL to Cloudinary
        const uploadRes = await cloudinary.uploader.upload(sampleVideoUrl, {
          resource_type: "video",
          public_id: publicId
        });

        // Generate thumbnail URL
        const thumbnailUrl = cloudinary.url(uploadRes.public_id, {
          resource_type: "video",
          transformation: [
            { width: 400, height: 225, crop: "fill" },
            { quality: "auto" },
            { start_offset: "auto" }
          ],
          format: "jpg"
        });

        // Save metadata in database
        const videoDoc = new SolutionVideo({
          problemId: problem._id,
          userId: adminUserId,
          cloudinaryPublicId: uploadRes.public_id,
          secureUrl: uploadRes.secure_url,
          duration: uploadRes.duration || 15,
          thumbnailUrl: thumbnailUrl
        });

        await videoDoc.save();
        console.log(`Success: Video uploaded & linked to "${problem.title}"!`);
      } else {
        console.log(`Video already exists for "${problem.title}"`);
      }
    }

    console.log("All problems now have Video Tutorials linked successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error populating videos:", err);
    process.exit(1);
  }
}

populateVideos();
