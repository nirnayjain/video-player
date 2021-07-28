import express from 'express'
import User from '../Model/User.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
const router=express.Router()

router.post('/register',async(req,res)=>{

//  const emailExist=await User.findOne({email:req.body.email})
//      if(emailExist) return res.status(400).send("Email already registered")
    
    //   const token=jwt.sign({email:req.body.email,password:req.body.password},process.env.SECRET_KEY)

    const user=new User({
        
        name:req.body.name,
        release:req.body.release,
        language:req.body.language,
        image:req.body.image,
        video:req.body.video
    })
    try{
    const savedUser=await user.save()
     res.status(201).send({status:"ok"})
    
    }
    
    catch(err){
        res.status(400).json({message:err})
        console.log(err)
    }
    

}


)
router.post('/viewMovie',async(req,res)=>{
      try{
          
          const totalRecords= await User.countDocuments()
   const users= await User.find().sort({ _id: -1 }).skip((req.body.page-1)*req.body.pageSize).limit(req.body.pageSize)
   res.json({
       users,
       total:totalRecords
   })
}
    
    catch(err){
        res.status(500).json({message:err.message})
    }
})



export default router
