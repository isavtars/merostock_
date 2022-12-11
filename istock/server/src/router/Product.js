 import express from "express";
import Product from "../controller/Product.js"
import tokenval from "../middleware/token.js";

const productrouter= express.Router()
const product=new Product()

//addproduct route
productrouter.post("/add",product.addproducts)
//getproducts
productrouter.get("/getproducts",product.getallitems)
//editbyid
productrouter.post("/edit/:id",product.editproductsbyid)

//findbyid
productrouter.get("/getbyid/:id",product.getproductsbyid)



//delete the products
productrouter.delete("/deletebyid/:id",tokenval,product.deleteproductsbyid)
export default productrouter;