const express=require('express')
const router=express.Router();
const fetchuser=require('../middleware/fetchuser')
const fetchadmin=require('../middleware/fetchadmin')
const { body, validationResult } = require('express-validator');
const Notes=require('../models/Notes')
const {authRole}=require('../middleware/authRole.js')
//ROUTE1:Get all the notes using:GET "api/auth/fetchallnotes"
router.get('/fetchallnotes',fetchuser,async(req,res)=>{
    const notes=await Notes.find({user:req.user.id})

    res.json(notes)
})
// ROUTE2:Add a new Note using:POST "/api/auth/addnote" .Login Required
router.post('/addnote',fetchuser,body('title','Enter a valid title').isLength({min:3}),
    body('description','Description must be atleast 5 characters').isLength({min:5}),async(req,res)=>{
    try{
        
    const {title,description,tag}=req.body
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const note=new Notes({
        title,description,tag,user:req.user.id
    })
    const savedNote=await note.save()
    res.json(savedNote)
    }
    catch(err){
        res.status(500).send({errors:'Internal server error'})
    }
})
//ROUTE3:Update an existing note using PUT:/api/notes/updatenote.Login Required
router.put('/updatenote/:id',fetchuser,async(req,res)=>{
    const {title,description,tag}=req.body
    // Create a newNote object
    const newNote={}
    if(title){newNote.title=title}
    if(description){newNote.description=description}
    if(tag){newNote.tag=tag}
    //Find the note to be updated and update it
    let note=await Notes.findById(req.params.id)
    if(!note){
        return res.status(404).send('Not found')}

    if(note.user.toString()!==req.user.id){
        return res.status(401).send('Not allowed')
    }
    note= await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
    res.json({note})
} )
// ROUTE4:Deleting a note using DELETE:/api/notes/deletenote.Login Required
router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
    const {title,description,tag}=req.body
    // Create a newNote object
    const newNote={}
    if(title){newNote.title=title}
    if(description){newNote.description=description}
    if(tag){newNote.tag=tag}
    //Find the note to be updated and update it
    let note=await Notes.findById(req.params.id)
    if(!note){
        return res.status(404).send('Not found')}
//Allow deletion only if user is found
    if(note.user.toString()!==req.user.id){
        return res.status(401).send('Not allowed')
    }
    note= await Notes.findByIdAndDelete(req.params.id)
    res.json({"Success":"Node has been deleted",note:note})
} )
// const Roles={
//     User: "user",
//   Admin: "admin",
//  }

//Admin login
router.get('/adminpage',fetchadmin,async(req,res)=>{
    // res.send('Admin Page')

    console.log("Succesfully executed");
    const notes=await Notes.find()
    res.json(notes)
})
module.exports=router