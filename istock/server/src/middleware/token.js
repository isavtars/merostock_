import jwt from "jsonwebtoken"
import "dotenv/config"


const tokenval=async(req,res,next)=>{
    const token=req.headers.token;
    
       
        if(token){
            try{
                jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
                    if(err) res.status(403).json("token not provided")
                    req.decode=decode//carry all information
                  next();
                })


            }catch(err){
                res.send(err)
            }
    
        }else{
            res.status(403).json("Token not provided")
        }
    }

export default tokenval;

