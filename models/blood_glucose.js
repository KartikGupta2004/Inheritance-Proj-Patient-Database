const mongoose=require('mongoose')
const {Schema}=mongoose
// const Date=new Date()
const UserSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    
    notes:{
        type:String
    },
    result:{
        type:Number
    },
    time:{
        type:String,default:Date.time
    },
    rec_type:{
        type:String
    },
    unit:{
        type:String
    },
    date:{
        type:String,default:Date.now
    },
})
module.exports=mongoose.model('blood_glucose',UserSchema)