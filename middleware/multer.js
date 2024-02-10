const multer=require('multer')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
    cb(null,'./files')
    },
    filename:function(rq,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})
module.exports=upload