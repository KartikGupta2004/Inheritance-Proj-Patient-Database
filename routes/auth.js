const express=require('express')
const router=express.Router()
const User=require('../models/User')
const { query, validationResult } = require('express-validator');
//Create a User using:POST "/api/auth/".Doesnt require auth
router.get('/',[
    query('name').isLength({min:5})
],(req,res)=>{
    console.log(req.body);
    const user=User(req.body)
    user.save()
    res.send(req.body)

})
module.exports=router