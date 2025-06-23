import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import signupRouter from './routes/signup.js'
import loginRouter from './routes/login.js'
import homeRouter from './routes/home.js'
import cookieParser from 'cookie-parser'
import logoutRouter from './routes/logout.js'

 const app=express();
 import cors from 'cors';
app.use(cors());

 app.use(express.json());
dotenv.config();
app.use(cookieParser());

mongoose.connect(process.env.MONGO)
.then(()=> console.log("MongoDB is Connected"))
.catch(()=> console.log("MOngoDB is Not Connected"))

app.use("/api",signupRouter);
app.use("/api/login",loginRouter);
app.use("/api/home",homeRouter);
app.use("/api/logout",logoutRouter);


app.listen(process.env.PORT,()=>{
    console.log("Port Is Listening");
})