const express=require('express')
const router=express.Router();
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const Notes=require('../models/medical_visit.js')
const {authRole}=require('../middleware/authRole.js')
//ROUTE1:Get all the notes using:GET "api/auth/fetchallnotes"
router.get('/fetchallvisits',fetchuser,async(req,res)=>{
    const notes=await Notes.find({user:req.user.id})

    res.json(notes)
})
// ROUTE2:Add a new Note using:POST "/api/auth/addnote" .Login Required
router.post('/addvisit',fetchuser,async(req,res)=>{
    try{
        
    const {doc_name,rec_type,notes,time}=req.body;
    console.log(req.body);
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const note=new Notes({
        doc_name,rec_type,notes,time,user:req.user.id
    })
    const savedNote=await note.save()
    res.json(savedNote)
    }
    catch(err){
        res.status(500).send({errors:'Internal server error'})
    }
})
//ROUTE3:Update an existing note using PUT:/api/notes/updatenote.Login Required
router.put('/updatevisit/:id',fetchuser,async(req,res)=>{
    const {doc_name,rec_type,notes,time}=req.body
    // Create a newNote object
    const newNote={}
    if(doc_name){newNote.doc_name=doc_name}
    if(notes){newNote.notes=notes}
    if(rec_type){newNote.rec_type=rec_type}
    if(time){newNote.time=time}

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
router.delete('/deletevisit/:id',fetchuser,async(req,res)=>{
    const {doc_name,rec_type,notes,time}=req.body
    // Create a newNote object
    const newNote={}
    if(doc_name){newNote.doc_name=doc_name}
    if(notes){newNote.notes=notes}
    if(rec_type){newNote.rec_type=rec_type}
    if(time){newNote.time=time}
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

module.exports=router