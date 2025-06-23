import  mongoose  from "mongoose";
import  Login from "../models/Login.js";
import Singup from '../models/Signup.js'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Signup from "../models/Signup.js";

const route=express.Router();

route.post("/",async(req,res)=>{
    console.log(req.body);
    try {
        const user = await Signup.findOne({ email: req.body.email });
       if(!user){
       return  res.status(402).json({message:"No user found SIgnup first "});
       }
       const ispasswordcorrect=bcrypt.compareSync(req.body.password,user.password)
       if(!ispasswordcorrect){
       return  res.status(401).json({message:"invalid password"});
       }

      
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: "1h" });

        return res.status(200).json({ status: "ok", message: "Login successful", token });

    } catch (error) {
       return  res.status(500).json({message:"errors is ", error:error.message})
    }
})

export default route;