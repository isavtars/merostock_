import {cmzModelC,cmzModelS,cmzModelCo }from "../../database/models/CustomizeM.js"

 export default class CustomizeProduct{
    
    // all controller fro the Caterozies 
    async cmzPOSt(req,res){
        const data = new cmzModelC(req.body);
        const response=await data.save();
        res.status(200).send(response);
    }


    async getcosPOSt(req,res){
        
        const response = await cmzModelC.find();
        res.status(200).send(response);
    }

    async cmzprodelet(req,res){
        const response = await cmzModelC.deleteMany();
        res.status(200).send(response);
    }



    // all contriller for the Sizes

    //cmzsizeadd
    async cmzsizeadd(req,res){
        const data = new cmzModelS(req.body);
        const response=await data.save();
        res.status(200).send(response);
    }

    //cmzsizegetsize
    async cmzsizegetsize(req,res){
        
        const response = await cmzModelS.find();
        res.status(200).send(response);
    }

     //cmzdeleteSize
    async cmzdeleteSize(req,res){
        const response = await cmzModelS.deleteMany();
        res.status(200).send(response);
    }


    // all contriller for the Colors
    //Colors
    async cmzcoloradd(req,res){
        const data = new cmzModelCo(req.body);
        const response=await data.save();
        res.status(200).send(response);
    }

    //cmzsizegetsize
    async cmzcolorgetcolor(req,res){
        
        const response = await cmzModelCo.find();
        res.status(200).send(response);
    }

     //cmzdeleteSize
    async cmzdeletecolor(req,res){
        const response = await cmzModelCo.deleteMany();
        res.status(200).send(response);
    }



}