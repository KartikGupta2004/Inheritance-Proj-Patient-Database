const mongoose=require('mongoose');
const {Schema}=mongoose;
module.exports=mongoose.model('oxygen',new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    rec_note:{
        type:String
    },
    pulse:{
        type:Number,required:true
    },
    result:{
        type:String,required:true
    },
    time:{
        type:String,required:true
    },
    date:{
        type:String,default:Date.now
    },
}))