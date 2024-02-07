const express=require('express')
const router=express.Router();
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const Notes=require('../models/records.js')
const multer=require('multer')
// const upload=multer({destination:})
const upload = require('../middleware/multer.js')
const UploadOnCloudinary=require('../util/upload.js')

//ROUTE1:Get all the notes using:GET "api/auth/fetchallnotes"
router.get('/fetchallrecords',upload.single('file'),fetchuser,async(req,res)=>{
    console.log(req.file);
    const notes=await Notes.find({user:req.user.id})

    res.json(notes)
})
// ROUTE2:Add a new Note using:POST "/api/auth/addnote" .Login Required
router.post('/addrecord',fetchuser,async(req,res)=>{
    
    const {doctor,drugs,rec_note,date}=req.body
    
    try{
    const note=new Notes({
        doctor,drugs,rec_note,date,user:req.user.id
            
    })
    const savedNote=await note.save()
    res.json(savedNote)
    }
    catch(err){
        res.status(500).send({errors:'Internal server error',err})
        console.log(err);
    
}
})

//ROUTE3:Update an existing note using PUT:/api/notes/updatenote.Login Required
router.put('/updaterecord/:id',fetchuser,async(req,res)=>{
    const {doctor,drugs,rec_note,date}=req.body
    // Create a newNote object
    const newNote={}
    if(doctor){newNote.doctor=doctor}
    if(drugs){newNote.drugs=drugs}
    if(rec_note){newNote.rec_note=rec_note}
    if(date){newNote.date=date}
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
router.delete('/deleterecord/:id',fetchuser,async(req,res)=>{
     const {doctor,drugs,rec_note,date}=req.body
    // Create a newNote object
    const newNote={}
    if(doctor){newNote.doctor=doctor}
    if(drugs){newNote.drugs=drugs}
    if(rec_note){newNote.rec_note=rec_note}
    if(date){newNote.date=date}
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
router.post('/addimage',upload.single('file'),fetchuser,async(req,res)=>{
    try{
    const file=req.file
    console.log(file.originalname);
    const image=await UploadOnCloudinary(file.path)
    console.log(image);
     const imageID = image.public_id;
     const imageURL=image.url;
     const note=new Notes({
        imageID,imageURL,user:req.user.id
     })
     const savedNote=await note.save()
     console.log(savedNote);
     res.json(savedNote)
    }catch(err){
        res.json(err)
    }
     
   
})
module.exports=router