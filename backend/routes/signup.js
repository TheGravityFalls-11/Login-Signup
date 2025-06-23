import  mongoose  from "mongoose";
import Signup from "../models/Signup.js";
import express from 'express'
import bcrypt from 'bcrypt'

const route=express.Router();

route.post("/", async(req,res)=>{
    console.log(req.body);
    try {
          const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

       const user=new Signup({
         name:req.body.name,
         email:req.body.email,
         password:hash
       });
        await user.save();
        res.status(200).json({message:"successfully signup"});
    } catch (error) {
        res.status(500).json({message:"errors is ", error})
    }
})

export default route;