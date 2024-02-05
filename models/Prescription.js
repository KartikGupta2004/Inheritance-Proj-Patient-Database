const mongoose=require('mongoose')
const {Schema}=mongoose
module.exports=mongoose.model('records', new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    doctor:{
        type:String,required:true
    },
    drugs:{
        type:Array,required:true
    },
    rec_note:{
        type:String
    },
    date:{
        type:String,default:Date.now
    },
    

}))