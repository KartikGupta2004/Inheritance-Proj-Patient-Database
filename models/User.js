const mongoose=require('mongoose')
const {Schema}=mongoose
const UserSchema = new Schema({
    firstname:{
        type:String,required:true
    },
    lastname:{
        type:String,required:true
    },
    mobile:{
        type:String,required:true
    },
    email:{
        type:String,required:true,unique:true
    },
    password:{
        type:String,required:true,unique:true
    },
    
    date:{
        type:String,default:Date.now
    },
    

})
// const user=mongoose.model('user',UserSchema)
// user.createIndexes()
// module.exports=user
module.exports=mongoose.model('users',UserSchema)