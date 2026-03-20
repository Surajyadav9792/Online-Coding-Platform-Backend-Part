const Redishclient = require("../config/redis");
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
      _id:user._id
     }

    const token=jwt.sign(
   {_id:user._id, emailId:user.emailId,role:user.role},
   process.env.JWT_KEY,
   {expiresIn:60*60}
   );

    res.cookie('token',token,{maxAge:60*60*1000});

    res.status(201).json({
      user:reply,
      message:"user Registered Successfully"
    })
    }
    catch(err){
      res.status(400).json({
        message: err.message
      });
    }
}

const login=async(req,res)=>{
    try{
       const {emailId,password}=req.body;

       if(!emailId){ 
        throw new Error("Invalid Credential")
       }

       if(!password){ 
        throw new Error("Invalid Credential")
       }

       const user=await User.findOne({emailId});

       if(!user){ 
        throw new Error("Invalid Email")
       }

       const match= await bcrypt.compare(password,user.password);

       if(!match){
        throw new Error("Invalid Password");
       }

       const reply={
      firstName:user.firstName,
      emailId:user.emailId,
      _id:user._id
     }

        const token=jwt.sign(
       {_id:user._id, emailId:user.emailId,role:user.role},
        process.env.JWT_KEY,
       {expiresIn:60*60}
   );

    res.cookie('token',token,{maxAge:60*60*1000});

    res.status(201).json({
      user:reply,
      message:"user login Successfully"
    })
    }

    catch(err){
    res.status(401).json({
      message: err.message
    });
    }
}

const logout=async(req,res)=>{
  try{
    const {token}=req.cookies;
    const payload=jwt.decode(token);

    await Redishclient.set(`token:${token}`,'Blocked');
    await Redishclient.expireAt(`token:${token}`,payload.exp);

    res.cookie("token",null,{expireAt:new Date(Date.now())});

    res.send("Logged Out Successfully");
  }
  catch(err){
    res.status(503).json({
      message: err.message
    });
  }
}

const adminRegister=async(req,res)=>{
     try{   
     validate(req.body);

     req.body.password= await bcrypt.hash(req.body.password,10);

     const user=await User.create(req.body);

    const token=jwt.sign(
   {_id:user._id, emailId:user.emailId,role:user.role},
   process.env.JWT_KEY,
   {expiresIn:60*60}
   );

    res.cookie('token',token,{maxAge:60*60*1000});

    res.status(201).send("user Registered Successfully");
    }
    catch(err){
      res.status(400).json({
        message: err.message
      });
    }
}

const deleteProfile=async(req,res) =>{
   try{
      const userId=req.result._id;

      await User.findByIdAndDelete(userId);

      await Submission.deleteMany({userId});

      res.status(200).send("Deleted Successfully");
   }
   catch(err){
    res.status(500).json({
      message: err.message
    });
   }
}

module.exports={register,login,logout,adminRegister,deleteProfile};