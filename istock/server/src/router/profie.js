import express from "express";


import Profilepage from "../controller/profile.js"


const profilerouter=express.Router();


const profilepage=new Profilepage();


profilerouter.post("/profilepost",profilepage.createprofile)
profilerouter.get("/profileget",profilepage.getprofile)

export default profilerouter;
