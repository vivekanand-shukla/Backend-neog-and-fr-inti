const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
     productName:{
        type:String,
        required: true,

     },
     rating:{
        type:Number,
        min:0,
        max:5,

     },
   
     numberOfReviews:Number,
     warranty:Number,
     Discription:String,

})
const Product = mongoose.model('Product' , productSchema)
module.exports =Product;

