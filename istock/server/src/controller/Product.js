
import mongoose from "mongoose";
import products from "../../database/models/Product.js"
class Product{
//addproducts
    async addproducts(req,res,imageName){
       try{
        const data=new products({...req.body,image:imageName});
         const response=await data.save();
         res.status(200).json({success:true,message:"product post sucess",response})
       }catch(err){
        res.status(404).json({stack:err.stack})
       }
    }
    //getproducts
   async getallitems(req,res){
    try{
    const response=await products.find();

    for (let d of response){
      //host in the sever locally
      d.image="http://localhost:8000/uploads/" + d.image;
  }
    res.status(200).json(response)
    }catch(err){
      res.status(404).json({stack:err.stack})
    }
   }
   //updateproductbyid
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
   //editproductbyid
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
  
    const id=req.params.id;
    try{

      const response= await products.findOneAndDelete({ _id: id });
      res.status(200).json({success:true,message:"sucessfully product  deleted "});

    }catch(err){
      res.status(404).json({stack:err.stack})
    }
   }
   //search
   async productsearchilter(req,res){
    const search=req.query.productName;
    try{
  
      if(search)  
      {
      // const data=await products.find({$or:[{productName:search},{category:search}]});
      const data = await products.find({productName:{ $regex:search,$options: "$i" } })
    
      res.json(data)
      }else{
        res.json("there is no serch")
      }
      
  
    }
    catch(err){
      res.json({stack:err.stack})
  console.log(search)
  
    }
  
  }
  
  
  
  
  
}
export default Product;
