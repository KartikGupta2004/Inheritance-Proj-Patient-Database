const express=require('express')
const router=express.Router();
const fetchuser=require('../middleware/fetchuser.js')
const { body, validationResult } = require('express-validator');
const Notes=require('../models/labtest.js')
const upload = require('../middleware/multer.js')
const UploadOnCloudinary=require('../util/upload.js')
//ROUTE1:Get all the notes using:GET "api/auth/fetchallnotes"
router.get('/fetchalltest',fetchuser,async(req,res)=>{
    const notes=await Notes.find({user:req.user.id})
    res.json(notes)
})
// ROUTE2:Add a new Note using:POST "/api/auth/addnote" .Login Required
router.post('/addtest',fetchuser ,async(req,res)=>{
    try{
    const {tests,rec_note,doctor,date,imageID,imageURL}=req.body;
    console.log(req.body);
    const note=new Notes({
        tests,rec_note,doctor,date,imageID,imageURL,user:req.user.id
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
router.put('/updatetest/:id',fetchuser,async(req,res)=>{
   const {tests,rec_note,doctor,date,imageID,imageURL}=req.body;
    // Create a newNote object
    const newNote={}
    if(date){newNote.date=date}
    if(rec_note){newNote.rec_note=rec_note}
    if(tests){newNote.tests=tests}
    if(doctor){newNote.doctor=doctor}
    if(imageID){newNote.imageID=imageID}
    if(imageURL){newNote.imageURL=imageURL}
    
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
router.delete('/deletetest/:id',fetchuser,async(req,res)=>{
   const {tests,rec_note,doctor,date,imageID,imageURL}=req.body;
    // Create a newNote object
    const newNote={}
    if(date){newNote.date=date}
    if(rec_note){newNote.rec_note=rec_note}
    if(tests){newNote.tests=tests}
    if(doctor){newNote.doctor=doctor}
    if(imageID){newNote.imageID=imageID}
    if(imageURL){newNote.imageURL=imageURL}
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
router.post('/addimage',upload.single('file'),fetchuser,async(req,res)=>{
    try{
    const file=req.file
    console.log(file.originalname);
    const image=await UploadOnCloudinary(file.path)
    console.log(image);
    res.json({imageID:image.public_id,imageURL:image.url})
    }catch(err){
        res.json(err)
    }
})
module.exports=router