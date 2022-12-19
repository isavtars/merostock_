import registerModel from "../../database/models/register.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import "dotenv/config"
class Authcontroller{
//loginuser
async logincontroller(req,res){
  const passw=req.body.password;
  const emails=req.body.email;
  try{


if(emails){
  const response=await registerModel.findOne({email:emails})
   const matching=bcrypt.compareSync(passw,response.password);
   
   if(matching){

    //jwt
    const token=jwt.sign({id:response._id,email:response.email,name:response.name,admin:response.admin},process.env.JWT_SECRET,{
      expiresIn:"7d",
    })
    res.json({
      id:response._id,
      email:response.email,
      name:response.name,
      admin:response.admin,
      sucess:true,
      token
    })
    
    

   }else{

    res.send("your credentials doee not match")
   }

  
}else{
  res.json([])
}

  }catch(err){
    res.send(err)
  }
}

  //registeruser
  async registercontroller(req,res){
  const passw=req.body.password;
  const cpassw=req.body.confirmpassword;
  

   const haspass= await bcrypt.hash(passw,10);
   const hascpass= await bcrypt.hash(cpassw,10);
    try{
     if(passw===cpassw){

      const data = new registerModel({...req.body,password:haspass, confirmpassword:hascpass});
      const response= await data.save();
      res.json({success:true,response});

     }else{


      res.send("password doesnot match")
     }
      
    }catch(err){
      res.send(err)
    }
  }
  //for testing
  async homecontroller(req,res){

    if(req.decode.admin){
      res.send(req.decode.email)
    }else{

      res.send("you are not admin")
    }
    
  }
}
export default Authcontroller;