const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
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
        amount:{
            type:Number,required:true,
        },
        
        address:{
            type:Object,required:true,
        },
        status:{
            type:String,default:"pending",
        },

       
       
       
       

    },
    {timeStamps:true}
);

module.exports = mongoose.model("order",OrderSchema);
