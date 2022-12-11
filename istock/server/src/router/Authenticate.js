import  express  from "express";
const router =express.Router()
import Authcontroller from "../controller/Authenticate.js"
const auth= new Authcontroller();
import tokenval from "../middleware/token.js"


//config the route from /auth
router.post("/login",auth.logincontroller)

//register
router.post("/register",auth.registercontroller)
router.get("/home",tokenval,auth.homecontroller)
export default router;