const mongoose=require('mongoose');
const {Schema}=mongoose;
module.exports=mongoose.model('doctors',new Schema({
    doctor:{
        type:String,required:true
    },
    description:{
        type:String,default:Date.now
    },
    
    
}))