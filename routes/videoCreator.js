const express=require('express');
const videoRouter=express.Router();
const adminMiddleware=require('../userMiddleware/adminAuthMiddleware');
const {generateUploadSignature,saveVideoMetadata,deleteVideo}=require("../controllers/videoSection")
videoRouter.get('/create',adminMiddleware,generateUploadSignature);
videoRouter.post('/save',adminMiddleware,saveVideoMetadata);
videoRouter.delete('/delete/:videoId',adminMiddleware,deleteVideo);

module.exports=videoRouter;