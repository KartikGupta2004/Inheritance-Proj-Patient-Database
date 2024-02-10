// // const passport=require('passport')
// //Middle ware to check if the user has the required roles
// const checkUserRole=(requiredRoles)=>(req,res,next)=>{
//     if(req.user && requiredRoles.includes(req.user.role)){
//         return next()
//     }else
//     return res.status(403).json({messsage:'Access denied.Insufficient permissions.'})
// }
// module.exports=checkUserRole