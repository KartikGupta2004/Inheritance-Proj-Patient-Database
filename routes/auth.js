const express=require('express')
const router=express.Router()
const User=require('../models/User')
const { query, validationResult } = require('express-validator');
//Create a User using:POST "/api/auth/".Doesnt require auth
router.post('/',[
    query('name').isLength({min:5})
],async(req,res)=>{
    console.log(req.body);
    const user= new User(req.body)
    try{
     await user.save()
    }
     catch(err){
        console.log(`Error ${err} occured`);
     }
    res.send(req.body)
    console.log(user);
})
module.exports=router