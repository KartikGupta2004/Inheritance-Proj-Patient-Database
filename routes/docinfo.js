const express=require('express')
const router=express.Router();
const fetchadmin=require('../middleware/fetchadmin.js')
const { body, validationResult } = require('express-validator');
const Notes=require('../models/doc_info.js')
//ROUTE1:Get all the notes using:GET "api/auth/fetchallnotes"
router.get('/fetchalldoctor',fetchadmin,async(req,res)=>{
    const notes=await Notes.find()
    res.json(notes)
})
// ROUTE2:Add a new Note using:POST "/api/auth/addnote" .Login Required
router.post('/adddoctor',fetchadmin,async(req,res)=>{
    try{
    const {doctor,description}=req.body;
    console.log(req.body);
    const note=Notes.create({
       doctor,description
    })
    res.json('Success')
    }
    catch(err){
        console.log(err);
        res.status(500).send({errors:'Internal server error'})
    }
})
module.exports=router