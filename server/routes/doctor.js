const express=require('express')
const router=express.Router();
const fetchadmin=require('../middleware/fetchadmin')
const { body, validationResult } = require('express-validator');
const Notes=require('../models/medical_visit.js')
const User=require('../models/User.js')
const {authRole}=require('../middleware/authRole.js')
//ROUTE1:Get all the notes using:GET "api/auth/fetchallnotes"
router.get('/fetchall',fetchadmin,async(req,res)=>{
    try{const notes=await Notes.find()
    for (var j = 0; j < notes.length; j++){

        const id=notes[j].user;
        console.log(id);
        const user=await User.findById(id);
        if(user){
        const firstname=user.firstname;
        const lastname=user.lastname;
        const name=firstname+' '+lastname
        console.log(name);
        const newNote={}
        if(name){
            newNote.name=name;
        }
        const entry=await Notes.findByIdAndUpdate(notes[j]._id,{$set:newNote},{new:true})
        console.log(entry);
        } 
    }
    return res.json(notes)
    }catch(err){
            console.log(err);
            return res.status(500).send('Internal Server Error')
        }
    
})

module.exports=router