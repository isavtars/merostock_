import registerModel from "../../database/models/register.js";

class Authcontroller{
  async logincontroller(req,res){
  res.send("hello from login api asin")
  }

  async registercontroller(req,res){
  
    try{

      const data = new registerModel(req.body);
      const response= await data.save();
      res.json(response);

    }catch(err){
      res.send(err)
    }
  }
}
export default Authcontroller;