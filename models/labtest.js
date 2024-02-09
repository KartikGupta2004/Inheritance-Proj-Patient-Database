const mongoose=require('mongoose')
const {Schema}=mongoose
module.exports=mongoose.model('lab_test', new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    doctor:{
        type:String,required:true
    },
    tests:{
        type:Array,required:true
    },
    date:{
        type:String,default:Date.now
    },
    rec_note:{
        type:String
    },
    imageURL:{
        type:String
    },
    imageID:{
        type:String
    }
}))