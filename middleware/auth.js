const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const Customer=require('../models/customer');

dotenv.config();

const authJWT=(req,res,next)=>{
    const token=req.header('Authorization');
    if(!token)return res.status(400).send("Access Denied");
    try {
        const decode=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decode;
        next();
    } catch (error) {
        res.status(400).send("Access Denied");
        next();
    }
}

const authRole=(role)=>{
    return (req,res,next)=>{
        if(res.user.role !==role){
            return res.status(400).send("Access Denied");
            next();
        }
    }
}

module.exports={authJWT,authRole}