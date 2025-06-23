import express from "express";
import jwt from "jsonwebtoken";
const route=express.Router()



route.get("/", (req, res) => {
    res.clearCookie("token");
    res.status(200).json({message:"Logout successfully"});
});

export default route;
