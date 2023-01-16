import express from "express";


import Profilepage from "../controller/profile.js"


const profilerouter=express.Router();


const profilepage=new Profilepage();


profilerouter.post("/profilepost",profilepage.createprofile)
profilerouter.get("/profileget",profilepage.getprofile)
profilerouter.get("/profileeditbyid/:id",profilepage.editprofilebyid)
profilerouter.post("/profileupdate/:id",profilepage.updateprofileby)

export default profilerouter;
