import express from "express"
import CustomizeProduct from "../controller/CustomizeC.js"
const router = express.Router();

//middleware
const cspro= new CustomizeProduct();


//all route for Caterozies
router.post("/productadd",cspro.cmzPOSt)
router.get("/cstomizepro",cspro.getcosPOSt);
router.delete("/delcmzpro",cspro.cmzprodelet)


//all route for Sizes 
router.post("/sizeadd",cspro.cmzsizeadd)
router.get("/getsize",cspro.cmzsizegetsize);
router.delete("/deletesize",cspro.cmzdeleteSize)



//all route for Colors
router.post("/coloradd",cspro.cmzcoloradd)
router.get("/getcolor",cspro.cmzcolorgetcolor);
router.delete("/deletecolor",cspro.cmzdeletecolor)



export default router;