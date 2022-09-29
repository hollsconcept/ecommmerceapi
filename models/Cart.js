const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
    {
        userid:{
            type:String,required:true},
        product:[
            {
                productid:{
                    type:String,required:true,
                },
                quantity:{
                    type:Number,default:1,
                },
            },
        ],
        

       
       
       
       

    },
    {timeStamps:true}
);

module.exports = mongoose.model("cart",CartSchema);