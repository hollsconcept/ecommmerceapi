const {verifiedToken,verifiedTokenAuthrization} = require("./verifiedToken")
const router = require("express").Router();

//UPDATE


app.put("/:id",verifiedTokenAuthrization, async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json("updated user")
    }catch(err){res.status(500).json("error");}
   
})

module.exports = router;