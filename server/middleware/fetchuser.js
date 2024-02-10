 const jwt=require('jsonwebtoken')
 require('dotenv').config()
 const JWT_SECRET=process.env.JWT_SECRET
 const fetchuser=(req,res,next)=>{
    //Get the user from jwt token
    const token=req.header("token")
    if(!token){
       return res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET)
        req.user=data.user
        console.log(req.user);
        next();
    }catch(err){
       return  res.status(401).send({error:"Please authenticate using a valid token"})
    }
   
    
 }
 
 module.exports=fetchuser;
 