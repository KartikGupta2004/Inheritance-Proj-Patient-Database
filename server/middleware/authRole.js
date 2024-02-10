
function authRole(role){
    return (req,res,next)=>{
        console.log(req.body.Role);
        console.log(role);
     if(req.body.Role!=role){
        res.status(401)
        return res.send('Not allowed')
     }
     next()
    }
}
// const checkRole = (roles) => async (req, res, next) => {
//   let {  } = req.body;

//   //retrieve employee info from DB
//   const employee = await Employee.findOne({ name });
//   !roles.includes(employee.role)
//     ? res.status(401).json("Sorry you do not have access to this route")
//     : next();
// };
module.exports={authRole}