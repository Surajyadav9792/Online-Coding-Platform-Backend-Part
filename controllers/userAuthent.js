const redisClient = require("../config/redis");
const User=require("../model/user");
const validate=require("../utils/validator")
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const Submission = require("../model/submission");

const register= async(req,res) =>{
    try{     
     validate(req.body);

     req.body.password= await bcrypt.hash(req.body.password,10);

     const user=await User.create(req.body);

     const reply={
      firstName:user.firstName,
      emailId:user.emailId,
      _id:user._id,
      role:user.role
     }

    const token=jwt.sign(
   {_id:user._id, emailId:user.emailId,role:user.role},
   process.env.JWT_KEY,
   {expiresIn:60*60}
   );

    res.cookie('token',token,{maxAge:60*60*1000, httpOnly:true, secure:true, sameSite:'none'});

    res.status(201).json({
      success: true,
      user:reply,
      message:"user Registered Successfully"
    })
    }
    catch(err){
      // Mongoose duplicate key error (e.g. email already exists)
      if (err.code === 11000) {
        return res.status(409).json({
          success: false,
          message: "Email already exists"
        });
      }
      res.status(400).json({
        success: false,
        message: err.message
      });
    }
}

const login=async(req,res)=>{
    try{
       const {emailId,password}=req.body;

       if(!emailId || emailId.trim() === ""){ 
        throw new Error("Email is required")
       }

       if(!password || password === ""){ 
        throw new Error("Password is required")
       }

       const normalizedEmail = emailId.trim().toLowerCase();
       const user = await User.findOne({ emailId: normalizedEmail });

       if(!user){ 
        throw new Error("Email is not registered.")
       }

       const match= await bcrypt.compare(password,user.password);

       if(!match){
        throw new Error("Incorrect password.");
       }

       const reply={
      firstName:user.firstName,
      emailId:user.emailId,
      _id:user._id,
      role:user.role,
     }

        const token=jwt.sign(
       {_id:user._id, emailId:user.emailId,role:user.role},
        process.env.JWT_KEY,
       {expiresIn:60*60}
   );

    res.cookie('token',token,{maxAge:60*60*1000, httpOnly:true, secure:true, sameSite:'none'});

    res.status(200).json({
      success: true,
      user:reply,
      message:"user login Successfully"
    })
    }

    catch(err){
    res.status(401).json({
      success: false,
      message: err.message
    });
    }
}

const logout=async(req,res)=>{
  try{
    const {token}=req.cookies;
    const payload=jwt.decode(token);

    await redisClient.set(`token:${token}`,'Blocked');
    await redisClient.expireAt(`token:${token}`,payload.exp);

    res.cookie("token",null,{httpOnly:true, secure:true, sameSite:'none', expires:new Date(0)});

    res.json({ success: true, message: "Logged Out Successfully" });
  }
  catch(err){
    res.status(503).json({
      success: false,
      message: err.message
    });
  }
}

const adminRegister=async(req,res)=>{
     try{   
     validate(req.body);

     req.body.password= await bcrypt.hash(req.body.password,10);
     req.body.role='admin';

     const user=await User.create(req.body);

    const token=jwt.sign(
   {_id:user._id, emailId:user.emailId,role:user.role},
   process.env.JWT_KEY,
   {expiresIn:60*60}
   );

    res.cookie('token',token,{maxAge:60*60*1000, httpOnly:true, secure:true, sameSite:'none'});

    res.status(201).json({ success: true, message: "user Registered Successfully" });
    }
    catch(err){
      if (err.code === 11000) {
        return res.status(409).json({
          success: false,
          message: "Email already exists"
        });
      }
      res.status(400).json({
        success: false,
        message: err.message
      });
    }
}

const deleteProfile=async(req,res) =>{
   try{
      const userId=req.result._id;

      await User.findByIdAndDelete(userId);

      await Submission.deleteMany({userId});

      res.status(200).json({ success: true, message: "Deleted Successfully" });
   }
   catch(err){
    res.status(500).json({
      success: false,
      message: err.message
    });
   }
}

module.exports={register,login,logout,adminRegister,deleteProfile};