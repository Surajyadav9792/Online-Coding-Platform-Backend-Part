const {CreateProblem,UpdateProblem,deleteProblem,getProblemById,getAllProblem,getSolvedProblemByUser,submittedProblem}=require('../controllers/userProblem');
const express=require('express');
const problemRouter=express.Router();
const adminMiddleware=require('../userMiddleware/adminAuthMiddleware');
const userMiddleware=require('../userMiddleware/userAuthMiddleware');

problemRouter.post("/create",adminMiddleware,CreateProblem);//creat
problemRouter.put("/update/:id",adminMiddleware,UpdateProblem);//update
problemRouter.delete("/delete/:id",adminMiddleware,deleteProblem);//delete

 problemRouter.get("/problemById/:id",userMiddleware,getProblemById);
problemRouter.get("/getAllProblem",userMiddleware,getAllProblem);
problemRouter.get("/ProblemSolvedByUser",userMiddleware,getSolvedProblemByUser);
problemRouter.get("/submittedProblem/:problemId",userMiddleware,submittedProblem);

module.exports=problemRouter;