const express=require('express')
const router=express.Router();
const fetchuser=require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const Notes=require('../models/Prescription')
// const upload = require('../models/Image')

//ROUTE1:Get all the notes using:GET "api/auth/fetchallnotes"
router.get('/fetchallrecords',fetchuser,async(req,res)=>{
    const notes=await Notes.find({user:req.user.id})

    res.json(notes)
})
// ROUTE2:Add a new Note using:POST "/api/auth/addnote" .Login Required
router.post('/addrecord',fetchuser,[body('doc_name','Must not be blanck').isLength({min:5}),body('rec_type','Must not be blanck').isLength({min:5})],
async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {doc_name,rec_type}=req.body
    
    try{
    const note=new Notes({
        doc_name,rec_type,user:req.user.id
            
    })
    const savedNote=await note.save()
    res.json(savedNote)
    }
    catch(err){
        res.status(500).send({errors:'Internal server error',err})
        console.log(err);
    
}
})
// router.post('/addimage',fetchuser,upload.single('avatar'),
// async(req,res)=>{
//     const errors=validationResult(req);
//     if(!errors.isEmpty()){
//         return res.status(400).json({errors:errors.array()})
//     }
//      const file = req.file
//   // Respond with the file details
// //   res.send({
// //     message: "Uploaded",
// //     id: file.id,
// //     name: file.filename,
// //     contentType: file.contentType,
// //   })
// })
//ROUTE3:Update an existing note using PUT:/api/notes/updatenote.Login Required
// router.put('/updatenote/:id',fetchuser,async(req,res)=>{
//     const {title,description,tag}=req.body
//     // Create a newNote object
//     const newNote={}
//     if(title){newNote.title=title}
//     if(description){newNote.description=description}
//     if(tag){newNote.tag=tag}
//     //Find the note to be updated and update it
//     let note=await Notes.findById(req.params.id)
//     if(!note){
//         return res.status(404).send('Not found')}

//     if(note.user.toString()!==req.user.id){
//         return res.status(401).send('Not allowed')
//     }
//     note= await Notes.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
//     res.json({note})
// } )
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
module.exports=router