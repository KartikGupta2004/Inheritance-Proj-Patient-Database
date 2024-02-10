const express=require('express')
const router=express.Router();
const fetchuser=require('../middleware/fetchuser.js')
const { body, validationResult } = require('express-validator');
const Notes=require('../models/blood_pressure.js')
//ROUTE1:Get all the notes using:GET "api/auth/fetchallnotes"
router.get('/fetchallpressurerec',fetchuser,async(req,res)=>{
    const notes=await Notes.find({user:req.user.id})
    res.json(notes)
})
// ROUTE2:Add a new Note using:POST "/api/auth/addnote" .Login Required
router.post('/addpressurerec',fetchuser ,async(req,res)=>{
    try{
    const {rec_note,systolic,diastolic,pulse,time,date}=req.body;
    console.log(req.body);
    const note=new Notes({
       rec_note,systolic,diastolic,pulse,time,date,user:req.user.id
    })
    const savedNote=await note.save()
    res.json(savedNote)
    }
    catch(err){
        console.log(err);
        res.status(500).send({errors:'Internal server error'})
    }
})
//ROUTE3:Update an existing note using PUT:/api/notes/updatenote.Login Required
router.put('/updatepressurerec/:id',fetchuser,async(req,res)=>{
    const {rec_note,systolic,diastolic,pulse,time,date}=req.body
    // Create a newNote object
    const newNote={}
    if(date){newNote.date=date}
    if(rec_note){newNote.rec_note=rec_note}
    if(systolic){newNote.systolic=systolic}
    if(diastolic){newNote.diastolic=diastolic}
    if(pulse){newNote.pulse=pulse}
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
router.delete('/deletepressurerec/:id',fetchuser,async(req,res)=>{
     const {rec_note,systolic,diastolic,pulse,time,date}=req.body
    // Create a newNote object
    const newNote={}
    if(date){newNote.date=date}
    if(rec_note){newNote.rec_note=rec_note}
    if(systolic){newNote.systolic=systolic}
    if(diastolic){newNote.diastolic=diastolic}
    if(pulse){newNote.pulse=pulse}
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
})

module.exports=router