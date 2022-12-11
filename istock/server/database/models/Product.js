import mongoose  from "mongoose";
 const additems=new mongoose.Schema({
 productName:{
    type:String,
    required:true,
    

 },
 productTitle:{
    type:String,
    required:true,

 },
 productIdentifierurl:{
    type:String,
    required:true, 
 },
 image:{
    type:String,
    required:true,
 },
 color:{
    type:Array,
    required:true,

 },
category:{
    type:Array,
    required:true,
    
 },
 productOldprice:{
    type:Number,
    required:true,
    
 },
newPrice:{
    type:Number,
    required:true,
    
 },
 size:{
    type:Array,
    required:true
 },
 totalStock:{
    type:Number,
    required:true,

 },
 inStock:{
    type:Boolean,
    default:true,

 },
 code:{
    type:String,
    required:true,
 },
 

 },{timestamps:true})
 const products=new mongoose.model("productadd",additems)
 export default products;