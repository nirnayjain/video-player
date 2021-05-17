import mongoose from 'mongoose'
const signUpTemplate=new mongoose.Schema({
   
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const User=mongoose.model("Users",signUpTemplate)
export default User