const mongoose=require('mongoose')
const {Schema}=mongoose
const UserSchema = new Schema({
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
})
module.exports=mongoose.model('medical_visits',UserSchema)