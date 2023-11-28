const jwt = require("jsonwebtoken")

const auth = async(req,res,next) =>{
    const token = req.headers.authorization
    if(!token){
        return res.status(400).json({message:"Wrong token login first"})
    }

    jwt.verify(token,"masai",function(error,decoded){
        if(error){
            return res.status(400).json({message:"Wrong token login first"})
        }else{
            req.body.user = decoded.userID
            next()
        }
    })
}

module.exports ={
    auth
}