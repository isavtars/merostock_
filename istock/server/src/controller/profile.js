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
        const response=await profilemodel.findOne({$and:[{name:search}]});
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({success:false,stack:error.stack})
    }
}
//editprofileyid
async editprofilebyid(req,res){
   const id=req.params.id
    try {
        const response=await profilemodel.findById(id)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({success:false,stack:error.stack})
    }
}
//updateprofile
async updateprofileby(req,res){
    const id =req.params.id;
    const update={...req.body};
    const opt={new:true};
    try {
        const response=await profilemodel.findOneAndUpdate({_id:id},update,opt)
        res.status(200).json(response)
    } catch (e) {
        res.status(404).json({success:false,stack:e.stack})
    }
}
}
export default Profilepage