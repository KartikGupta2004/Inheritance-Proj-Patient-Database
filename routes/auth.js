const express=require('express')
const router=express.Router()
const User=require('../models/User')
const { body, validationResult, header } = require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const fetchuser=require('../middleware/fetchuser.js')
require('dotenv').config();

const JWT_SECRET=process.env.JWT_SECRET;
//ROUTE1:Create a User using:POST "/api/auth/createuser".Doesnt require auth
router.post('/createuser/',[
    // body('name','Enter a valid name').isLength({min:3}),
    body('password','Password must be atleast 5 characters').isLength({min:5})
],async(req,res)=>{
    console.log(req.body);
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    //Check user if user with same email already exists
    try{
    let user=await User.findOne({email:req.body.email})
    if(user){
        console.log('Error')
        return res.status(400).json({error:"Sorry a user with this email exists"})
        
    }
    console.log('User creation')
    //We convert the password into hash to protect.We also add salt for more safety
    const salt=await bcrypt.genSalt(10)
    const secPass=await bcrypt.hash(req.body.password,salt)
    //Create new user
    user=await User.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        mobile:req.body.mobile,
        password:secPass,
        email:req.body.email,
        role:req.body.role,
    })
    const data={user:{id:user.id}}
    const authToken=jwt.sign(data,JWT_SECRET)
    console.log(authToken);
    // res.send(user)
    res.json({authToken})
}
catch(err){
    console.error(err.message)
    res.status(500).send('Some error occured')
}
    // const user= new User(req.body)
    // try{
    //  await user.save()
    //  res.send(req.body)
    // }
    //  catch(err){
    //     console.log(`Error ${err} occured`);
    //     // res.send('Sorry an error has occured')
    //     res.status(400).json({errors:'Please send a unique value',message:err.message})
    //  }
    
    // console.log(user);
})
//ROUTE2:Create a Authentication using:POST "/api/auth/login".

router.post('/login/',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password must not be blank').exists()
],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {email,password}=req.body
    
    try{
        let user=await User.findOne({email})
        if(!user){
            return res.status(400).json({error:'Please try to login with correct credentials'})
        }
        let passwordCompare=await bcrypt.compare(password,user.password)
        if(!passwordCompare){
            return res.status(400).json({error:'Please try to login with correct credentials'})
        }
        const data={user:{id:user.id}}
        const authToken=jwt.sign(data,JWT_SECRET)
        console.log(authToken);
        res.status(200).json({authToken})
    }
    catch(err){
        console.error(err.message)
    res.status(500).send('Internal server error')               
    }
})

// ROUTE3:Get logged in User Details using POST "/api/auth/getuser" Login required 
router.post('/getuser/', fetchuser, async (req,res) => {
try{
    userID=req.user.id
    const user=await User.findById(userID).select("-password")
    res.send(user)
    console.log(user)

}catch(err){
      console.error(err.message)
    res.status(500).send('Internal server error')
}

})


module.exports=router 

