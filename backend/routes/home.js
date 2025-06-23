import express from 'express'
import jwt from 'jsonwebtoken'
 const route=express.Router();

 const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) return res.status(401).json({ message: "No token provided." });
 
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err) res.status(401).json({message:"token invalid"});
        req.user=decoded;
        next();
    })

 }

route.post("/",verifyToken,(req,res)=>{
    return res.status(200).json({message:`welcome to home page ${req.user.email}`});
})

 export default route;