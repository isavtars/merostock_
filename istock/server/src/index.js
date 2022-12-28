import express from "express"
import "dotenv/config"
import authrouter from "./router/Authenticate.js"
import productrouter from  "./router/Product.js"
import profilerouter from "./router/profie.js"
import cors from "cors"

import connections from "../database/connections.js" //always



//middleawrw
const port=process.env.PORT;
const app=express()
app.use(express.json())
app.use(cors())


//route

app.get("/",(req,res)=>{
    res.send("this is oue express server")
})
//authrouting
app.use("/auth",authrouter)


//productRoute
app.use("/productapi",productrouter)

//profilerouting
app.use("/profileapi",profilerouter)
//server listting
app.listen(port,()=>{
    console.log(`App is running succesfully ${port}`);
    connections();

})