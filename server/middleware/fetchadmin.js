 const jwt=require('jsonwebtoken')
 require('dotenv').config()
 const User=require('../models/User')
 const JWT_SECRET=process.env.JWT_SECRET
 const fetchuser=async(req,res,next)=>{
    

    //Get the user from jwt token
    const token=req.header('token')
    if(!token){
       return res.status(401).send({error:"Please authenticate using a token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET)
        req.user=data.user
        console.log(req.user);
        let user=await User.findOne({_id:req.user.id});
        // console.log(user);
       if(user.Role=='admin'){
        console.log('Success');
        next();
       }
       
    }catch(err){
         res.status(401).send({error:"Please authenticate using a valid token"})
    }
   
    
 }
 
 module.exports=fetchuser;
 