const jwt= require("jsonwebtoken")

const verifiedToken = (req,res, next)=>{
    const authHeader = req.headers.token
    if(authHeader){
        const token = authHeader.spilt(" ")[1];
        jwt.verify(token,process.env.JWT_SEC,(err,user)=>{
            if(err) res.status(403).json("token is not valid");
            req.user = user;
            next();
        })
    }else{
        return res.status(401).json("you are not authenticated")
    }
}


const verifiedTokenAuthrization = (req,res,next)=>{
    verifiedToken(req,res,()=>{
        if(req.user.id === req.param.id || req.id.isAdmin){
            next()
        }else{
            res.status(403).json("you are not allowed to do that")
        }
    })
    
}

module.exports = {verifiedToken, verifiedTokenAuthrization};