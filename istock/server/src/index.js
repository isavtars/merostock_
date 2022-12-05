import express from "express"
import "dotenv/config"
import authrouter from "./router/Authenticate.js"
const port=process.env.PORT;
const app=express()

app.get("/",(req,res)=>{
    res.send("this is oue express server")
})
//authrouting
app.use("/auth",authrouter)
app.listen(port,()=>{console.log("App is running succesfully")})