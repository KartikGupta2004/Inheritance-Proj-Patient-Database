const express=require('express')
const router=express.Router();
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const Notes=require('../models/Notes')
//ROUTE1:Get all the notes using:GET "api/auth/fetchallnotes"
router.get('/fetchallnotes',fetchuser,async(req,res)=>{
    const notes=await Notes.find({user:req.user.id})

    res.json(notes)
})
// ROUTE2:Add a new Note using:POST "/api/auth/addnote" .Login Required
router.get('/addnote',fetchuser,body('title','Enter a valid title').isLength({min:3}),
    body('Description','Description must be atleast 5 characters').isLength({min:5}),async(req,res)=>{
    const {title,description,tag}=req.body
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const note=new NOte
    res.json(notes)
})
module.exports=router