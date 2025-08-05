const mongoose = require('mongoose')
const productCartSchema = new mongoose.Schema({
    title:String,
    rating:{
        type:Number,
        min:0,
        max:5,
        default:0
    }, noOfPeopleRated:{
         type:Number,
 }, toatalRewiews:{
        type:Number },
 price:{
        type:Number  },
    discount:{
        type:Number },
    specialPrice:{
        type:Number  },
    availableOFfers:[String],
    model:{ type:String }
    })
const product = mongoose.model('Product' ,productCartSchema)
module.exports = product
