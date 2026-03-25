const express=require('express');
const  aiRouter=express.Router();
const solveDout=require("../controllers/Gemini");
const userMiddleware=require('../userMiddleware/userAuthMiddleware');
aiRouter.post("/chat",userMiddleware,solveDout);//creat

module.exports=aiRouter;