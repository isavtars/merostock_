import mongoose from "mongoose";
import products from "../../database/models/Product.js"
class Product{
//addproducts
    async addproducts(req,res){
       try{
         const data=new products(req.body);
         const response=await data.save();
         res.status(200).json(response)
       }catch(err){
        res.status(404).json(err)
       }
    }
    //getproducts
   async getallitems(req,res){
    try{
    const response=await products.find()
    res.status(200).json(response)
    }catch(err){
      res.status(404).json({stack:err.stack})
    }
   }
   //editproductbyid
   async editproductsbyid(req,res){
    const id =req.params.id;
    const update={...req.body};
    const opt={new:true};

    try{
   const response=await products.findOneAndUpdate({_id:id},update,opt)
   res.status(200).json(response) 


    }catch(err){
      res.status(404).json({stack:err.stack})
    }
   }
   //findproductbyid
   async getproductsbyid(req,res){
    const id =req.params.id;
    try{
    const response=await products.findById(id)
    res.status(200).json(response)
    }catch(err){
      res.status(404).json({stack:err.stack})
    }
   }


   //deleteproductsbyid

   async deleteproductsbyid(req,res){
  
    const {id}=req.params;
    try{

      const response= await products.findOneAndDelete(id);
      res.status(200).json({sucess:true,message:"sucessfully product  deleted "});

    }catch(err){
      res.status(404).json({stack:err.stack})
    }
   }
}
export default Product;