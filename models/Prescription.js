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
     img: { data: Buffer,type:String
     },
    date:{
        type:String,default:Date.now
    },
    

})
module.exports=mongoose.model('record',UserSchema)