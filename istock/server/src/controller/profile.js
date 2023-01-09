import profilemodel from "../../database/models/profile.js"
class Profilepage{
  //createprofile  
async createprofile(req,res){
    try{
       const data= new profilemodel(req.body)
       const response=await data.save();
       res.status(200).json({success:true,response})
    }catch(err){
        res.status(404).json({success:false,stack:err.stack})
    }
}
//getprofile
async getprofile(req,res){
    const {search}=req.query;

    try {
        const response=await profilemodel.find({$or:[{name:search}]});
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({success:false,stack:error.stack})
    }
}

}
export default Profilepage