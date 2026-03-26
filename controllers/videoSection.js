const cloudinary = require('cloudinary').v2;
const Problem=require("../model/problem");
const User=require("../model/user");
const SolutionVideo=require("../model/solutionVideo");


//the first step do using cloudinary we need to configure
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
const generateUploadSignature=async(req,res)=>{
   try{
    const {problemId,userId}=req.body;
    //verify problem exists
    const problem=await Problem.findById(problemId);
    if(!problem){
        return res.status(404).json({error:'Problem not found'});
    }
    //Generate unique public_id for the video
    const timestamps=Math.round(new Date().getTime()/1000);
    //for making meaningfull publicId we generate it otherwise it is also provide the publicId
    const publicId=`leetcode-solution/${problemId}/${userId}_${timestamps}`;

    //upload parameters
    const uploadParams={
        timestamp:timestamps,
        public_id:publicId,
    };
    //Genrate the signature
    const signature=cloudinary.utils.api_sign_request(
        uploadParams,
        process.env.CLOUDINARY_API_SECRET
    );
    //we send it to File Storage System
    res.json({
        signature,
        timestamps,
        public_id:publicId,
        api_key:process.env.CLOUDINARY_API_KEY,
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        upload_url:`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/video/upload`,     
    });

   }catch(error){
    console.log('Error genratin upload signature:',error);
    res.status(500).json({error:'Failed to generate upload credntials'})
   }
};
const saveVideoMetadata = async (req, res) => {
    try {
        const {
            problemId,
            cloudinaryPublicId,
            secureUrl,
            duration,
        } = req.body;

        // through adminmiddleware
        const userId = req.result._id;

        // first we need to verify that the video is uploaded or not in cloudinary
        const cloudinaryResource = await cloudinary.api.resource(
            cloudinaryPublicId,
            { resource_type: 'video' }
        );

        if (!cloudinaryResource) {
            return res.status(400).json({ error: 'Video not found on Cloudinary' });
        }

        // check if video already exists for this problem and user
        const existingVideo = await SolutionVideo.findOne({
            problemId,
            userId,
            cloudinaryPublicId
        });

        if (existingVideo) {
            return res.status(409).json({ error: 'video already exists' });
        }


        // we generate thumbnailUrl throw public_id
        // here the cloudinaryResource return a object where the public_id and other information is present
        const thumbnailUrl = cloudinary.url(
            cloudinaryResource.public_id,
            {
                resource_type: "video",
                transformation: [
                    { width: 400, height: 225, crop: "fill" },
                    { quality: "auto" },
                    { start_offset: "auto" }
                ],
                format: "jpg"
            }
        );


        // create video solution record
        const viedoSolution = new SolutionVideo({
            problemId,
            userId,
            cloudinaryPublicId,
            secureUrl,
            duration: cloudinaryResource.duration || duration,
            thumbnailUrl
        });

        await viedoSolution.save();


        res.status(201).json({
            message: "video solution saved successfully",
            viedoSolution: {
                id: viedoSolution._id,
                thumbnailUrl: viedoSolution.thumbnailUrl,
                duration: viedoSolution.duration,
                uploadedAt: viedoSolution.createdAt
            }
        });

    }
    catch (error) {
        console.error('Error saving video metadata', error);
        res.status(500).json({ error: 'Failed to save video metadata' });
    }
};


module.exports={generateUploadSignature,saveVideoMetadata}

