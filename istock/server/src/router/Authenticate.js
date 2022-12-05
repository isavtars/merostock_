import  express  from "express";
const router =express.Router()
import Authcontroller from "../controller/Authenticate.js"
const auth= new Authcontroller();



//config the route from /auth
router.get("/",auth.logincontroller)

//register
router.post("/register",auth.registercontroller)

export default router;