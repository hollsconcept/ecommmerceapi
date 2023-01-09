const router = require("express").Router();
const {verifiedToken,verifiedTokenAuthrization, verifiedTokenAndAdmin} = require("./verifiedToken")

const Product = require('../models/Product');

// CREATE
router.post("/",verifiedTokenAndAdmin,async (req,res)=>{
    const newProduct = new Product(req.body);
    try{
       const savedProduct = await newProduct.save();
       res.status(200).json(savedProduct) 
    }catch(error){
        res.status(500).json(err)
    }
})

//UPDATE


//router.put("/:id",verifiedTokenAuthrization, async (req,res)=>{
    //if(req.body.password){
      //  req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    //}
   // try{
        //const updatedUser = await User.findByIdAndUpdate(req.params.id,{ $set:req.body,},{new:true});
        //res.status(200).json(updatedUser);
    //}catch(err){res.status(500).json("err");}
   
//})

//DELETE

//router.delete("/:id",verifiedTokenAuthrization, async (req,res)=>{
  //  try{
    //    await User.findByIdAndDelete(req.params.id)
      //  res.status(200).json("user has been deleted")
    //}catch(err)
    //{
      //  res.status(500).json("error")
    //}
//})

//GET

//router.get("/find/:id",verifiedTokenAndAdmin, async (req,res)=>{
  //  try{
    //    const user = await User.findById(req.params.id)
      //  const{password,...others}= user._doc;
       
      
        //res.status(200).json(others);
       
    //}catch(err)
    //{
      //  res.status(500).json("error")
    //}
//})

//GET ALL USERS

//router.get("/",verifiedTokenAndAdmin, async (req,res)=>{
   // const query = req.query.new
    //try{
      //  const users = query ? await User.find().sort({_id:-1}).limit(2) : await User.find()
        //res.status(200).json(users);
       
   // }catch(err)
    //{
      //  res.status(500).json("error")
    //}
//})

//GET USER BY STAT

//router.get("/stats",verifiedTokenAndAdmin, async (req,res)=>{
  //  const date = new Date();
    //const lastYear = new Date(date.setFullYear(date.getFullYear()-1));
    //try{
      //  const data = await User.aggregate([
        //    {$match : {createdAt :{$gte:lastYear}}},
          //  {
            //    $project:{
              //      month :{
                //        $month:"$createdAt"
                  //  },
                //},
            //},
            //{
              //  $group:{_id:"$month",
                //total:{$sum:1}},
            //},
            
        //]);
        //res.status(200).json(data)
    //}catch(err){
      //  res.status(500).json(error)
    //}
//})


module.exports = router;