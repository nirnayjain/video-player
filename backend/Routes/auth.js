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
        
        userName:req.body.userName,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address
    })
    try{
    const savedUser=await user.save()
     res.send({status:"ok"})
    
    }
    
    catch(err){
        res.json({message:err})
        console.log(err)
    }
    

}


)

router.post('/login',async(req,res)=>{

    const token=jwt.sign({email:req.body.email,password:req.body.password},process.env.SECRET_KEY)
       res.cookie("token",token,{
           httpOnly:true,
           
           maxAge:5*60*1000
       })
       res.json(token)
  
       
})
router.get('/auth',(req,res)=>{
     const cookie=req.cookies["token"]

    const claims=  jwt.verify(cookie,process.env.SECRET_KEY)
     
     if(!claims)
     {
         return res.status(401).send("Unauthenticated")

    }
    // const user=await User.findOne({_id
    //     :claims._id})
    // res.json(user)
    // res.json(claims)
    res.send(true)


})
router.get('/subscribers',async(req,res)=>{
    try{
   const users= await User.find()
   res.json(users)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})
router.delete('/:_id',async(req,res)=>{
try{
  
  const user=await User.remove({_id:req.params._id})
   res.json(User)
}
catch(err){
    return res.status(500).json({message:err.message})
}
})

export default router
