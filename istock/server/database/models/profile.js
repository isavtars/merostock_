import mongoose from "mongoose";
import validator from "validator";

const userprofile=new mongoose.Schema({
name:{
 type:String,
   required:true,
},
email:{
    type:String,
    
    //custome validate  with   validators ss
    validate(value){
      
        if(!validator.isEmail(value)){
            throw new Error("your email is invalid");
        }
        
    } 



},
phone:{
    type:Number,
    required:true,
    
   
},

image:{
    type:String,
    
},
shopname:{
    type:String,
 
   },
   address:{
    type:String,
     
   },
   country:{
    type:String,
      required:true,
      default:"Nepal",

   },
   province:{
    type:String,
      
   },
   postalcode:{
    type:Number,
      required:true,
   },




})
const profilemodel=new mongoose.model("profilepage",userprofile)
export default profilemodel;