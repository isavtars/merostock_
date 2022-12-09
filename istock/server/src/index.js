import express from "express"
import "dotenv/config"
import authrouter from "./router/Authenticate.js"
import productrouter from  "./router/Product.js"

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
//addproductrouting
app.use("/productapi",productrouter)




//server listting
app.listen(port,()=>{
    console.log(`App is running succesfully ${port}`);
    connections();

})



