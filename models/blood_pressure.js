const mongoose=require('mongoose');
const {Schema}=mongoose;
module.exports=mongoose.model('blood_pressure',new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    rec_note:{
        type:String
    },
    systolic:{
        type:Number,required:true
    },
    diastolic:{
        type:Number,required:true
    },
    pulse:{
        type:Number,required:true
    },
    time:{
        type:String,required:true
    },
    date:{
        type:String,default:Date.now
    },
}))