import  express  from "express";
const router =express.Router()
import Authcontroller from "../controller/Authenticate.js"
const auth= new Authcontroller();

router.get("/",auth.logincontroller)
export default router;