const mongoose = require('mongoose')
const restaurantsSchema = new mongoose.Schema({
 name:{
    type:String,
    required:true,},
 cuisine:[{
    type:String,
    required:true,
    enum:['Italian', 'Mexican', 'Chinese', 'Indian', 'American', 'French', 'Japanese', 'Mediterranean', 'Thai', 'Vegetarian', 'Vegan', 'Other']}],
location :{
    type:String,
    required:true},owner  :{
    type:String,
    required:true},
  phone  :{
    type:String,
    },
  openingYear    :{
    type:Number,
    },
  rating     :{
    type:Number,
     max:5,
     min:0,
     default:0},
 specialDishes:[{
    type:String}],
 photoUrls :[{
    type:String,
} ],

}, { timestamps: true })

const   Restaurants = mongoose.model('Restaurants', restaurantsSchema)
module.exports   = Restaurants;