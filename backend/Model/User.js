import mongoose from 'mongoose'
const movieTemplate=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
   release:{
        type:Date,
        required:true

    },
    language:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    
    date:{
        type:Date,
        default:Date.now
    }
})
const User=mongoose.model("movie",movieTemplate)
export default User