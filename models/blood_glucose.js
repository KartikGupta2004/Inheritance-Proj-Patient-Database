const mongoose=require('mongoose');
const {Schema}=mongoose;
module.exports=mongoose.model('blood_glucose',new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    rec_note:{
        type:String
    },
    result:{
        type:Number,required:true
    },
    time:{
        type:String,required:true
    },
    rec_type:{
        type:String,required:true
    },
    unit:{
        type:String
    },
    date:{
        type:String,default:Date.now
    },
}))