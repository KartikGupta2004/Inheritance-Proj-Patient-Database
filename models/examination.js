const mongoose=require('mongoose');
const {Schema}=mongoose;
module.exports=mongoose.model('examination',new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    symptoms:{
        type:Array,required:true
    },
    diagnoses:{
        type:Array,required:true
    },
    temperature:{
        type:String,required:true
    },
    tempunit:{
        type:String
    },
    weight:{
        type:String,required:true
    },
    weightunit:{
        type:String
    },
    height:{
        type:String,required:true
    },
    heightunit:{
        type:String
    },
    rec_note:{
        type:String
    },
    doctor:{
        type:String,required:true
    },
    date:{
        type:String,default:Date.now
    },
    imageURL:{
        type:String
    },
    imageID:{
        type:String
    }
    
}))