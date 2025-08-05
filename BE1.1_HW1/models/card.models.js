const mongoose = require('mongoose')
const cardSchema = new mongoose.Schema({
        cardNumber :{
            type:Number,
            required :true,

        },

 expiryMonth: {
    type: Number,
    min:0,
    max:12,
    required: true },
  expiryYear: {
    type: Number,
    required: true},
  personName:{
    type:Number,
    required:true}
},
{timestamps:true})
const Card = mongoose.model('Card' , cardSchema )
module.exports = Card
