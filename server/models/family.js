const mongoose=require('mongoose');
const {Schema}=mongoose;
module.exports=mongoose.model('family_history',new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    family_member:{
        type:String,required:true
    },
    description:{
        type:String
    },
    
    
}))