const express = require("express")
const userRouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { UserModel } = require("../models/user.model")

userRouter.post("/register",async(req,res)=>{
    const { username, email, password, watchedMovies, reviews } = req.body;
    try{
         const hashPassword = bcrypt.hashSync(password,5)
         const newUser = new UserModel({username, email, password:hashPassword, watchedMovies, reviews})
         await newUser.save()
         res.status(201).json({message:"User Registered"})
     
    }catch(error){
        res.status(400).json({message:error})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try{
       const isEmailValid = await UserModel.findOne({email})
       if(!isEmailValid){
        return res.status(201).json({message:"Email not registered with us"})
       }
       const isPasswordValid = bcrypt.compareSync(password,isEmailValid.password)
       if(!isPasswordValid){
        return res.status(201).json({message:"Wrong Credentials"})
       }
       const token = jwt.sign({userID:isEmailValid._id},"masai")
       res.status(201).json({message:"Login Success",token:token})

    }catch(error){
        res.status(400).json({message:error})
    }
})



module.exports ={
    userRouter
}