const mongoose=require('mongoose');
const {Schema}=mongoose;
module.exports=mongoose.model('vaccine',new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String,required:true
    },
    date:{
        type:String,default:Date.now
    },
    
    
}))