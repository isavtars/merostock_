

import express from "express";
import Product from "../controller/Product.js"
import tokenval from "../middleware/token.js";

const productrouter= express.Router()

const product=new Product()



import multer from 'multer';

let imageName;

  //image sender to the data base and and it store locally
  //multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
      imageName =
        Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        "-" +
        file.originalname.trim();
      cb(null, imageName);
    },
  });
  
    //storage: storage = storage destructuring
  const upload = multer({ storage: storage })  


  //addproduct route and image
productrouter.post("/add",upload.single("image"),(req,res) =>
{
 product.addproducts(req,res,imageName)
//  product.editproductsbyid(req,res,imageName)
}
)


//test 
// productrouter.post("/add",product.addproducts)



//getproducts
productrouter.get("/getproducts",product.getallitems)
//update
productrouter.post("/edit/:id",product.editproductsbyid)

//editbyid
productrouter.get("/getbyid/:id",product.getproductsbyid)



//delete the products
productrouter.delete("/deletebyid/:id",product.deleteproductsbyid)
//searchproduct
productrouter.get("/productsearch",product.productsearchilter)
export default productrouter;
