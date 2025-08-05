const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    productName : String,
    productInfo:String,
    color:{
        type:String,
        enum:["blue" , "Red" , "Green" , "orange" , "Black" ]
    },
    size:{
        type:Number,
        enum:[7,8,9,10,11 ]
    },
    price:{
         type:Number,
         
    }

})
const Product = mongoose.model('Products' ,  productSchema)
module.exports = Product
