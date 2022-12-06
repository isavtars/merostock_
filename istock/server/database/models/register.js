import mongoose from "mongoose";

import  validator  from "validator";

 const registerusers= new mongoose.Schema({


    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        //custome validate  with   validators ss
        validate(value){
          
            if(!validator.isEmail(value)){
                throw new Error("your email is envalid")
            }
            
        } 



    },
    phone:{
        type:Number,
        required:true
    },

     password:{
           type:String,
           required:true 
     },

     confirmpassword:{

        type:String,
        required:true
     }



})



const registerModel = new mongoose.model("istock",registerusers)

export default registerModel;