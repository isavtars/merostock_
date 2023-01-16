import mongoose from "mongoose";
const customeproschemaC=new mongoose.Schema({

    Categories:{
        type:Array,
        required:true,
    },
})

const cmzModelC=new mongoose.model("customeproductsC",customeproschemaC);
export  {cmzModelC};



const customeproschemaS=new mongoose.Schema({   
    SelectedSizes:{
        type:Array,
        required:true,
    },  
})

const cmzModelS=new mongoose.model("customeproductsS",customeproschemaS);
export  {cmzModelS};






const customeproschemaCo=new mongoose.Schema({
    
    selectColor:{
        type:Array,
        required:true,
    },
       
    
})

const cmzModelCo=new mongoose.model("customeproductsCo",customeproschemaCo);
export  {cmzModelCo};