import express from "express"
import "dotenv/config"
import authrouter from "./router/Authenticate.js"


import connections from "../database/connections.js" //always



//middleawrw
const port=process.env.PORT;
const app=express()
app.use(express.json())


//route

app.get("/",(req,res)=>{
    res.send("this is oue express server")
})
//authrouting
app.use("/auth",authrouter)




//server listting
app.listen(port,()=>{
    console.log(`App is running succesfully ${port}`);
    connections();

})