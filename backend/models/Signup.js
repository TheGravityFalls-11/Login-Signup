import mongoose from 'mongoose'
 const signupSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        min:8
    }
 })

 export default mongoose.model("Signup",signupSchema);