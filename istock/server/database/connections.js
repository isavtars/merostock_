import mongoose from "mongoose"
import "dotenv/config";


const MONGODB=process.env.MONGODB;




const connections =()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGODB,{}).then(()=>{
            
        console.log("dbconnected sucessfully");
    }).catch((err)=>{
        console.log(err)
    })
}

export default connections;


