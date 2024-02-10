const mongoose=require('mongoose')
const {Schema}=mongoose
module.exports=mongoose.model('records', new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    doctor:{
        type:String
    },
    drugs:{
        type:Array
    },
    rec_note:{
        type:String
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