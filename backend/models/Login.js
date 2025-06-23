import mongoose from 'mongoose'
 const loginSchema=new mongoose.Schema({
   
    email:{
        type:String,
        required:true,
        unique:true

    },
    Password:{
        type:String,
        required:true,
        min:8
    }
 })

 export default mongoose.model("Login",loginSchema);