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

module.exports={generateUploadSignature}

