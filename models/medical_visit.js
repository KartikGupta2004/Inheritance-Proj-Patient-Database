const mongoose=require('mongoose')
const {Schema}=mongoose
module.exports=mongoose.model('medical_visits', new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    doc_name:{
        type:String,required:true
    },
    rec_type:{
        type:String,required:true
    },
    notes: { type:String
     },
    date:{
        type:String,default:Date.now
    },
    time:{
        type:String
    },
}))