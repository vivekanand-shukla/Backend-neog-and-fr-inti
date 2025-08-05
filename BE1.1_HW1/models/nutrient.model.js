const mongoose = require("mongoose")
const NutrientSchema = new  mongoose.Schema({
    imageUrl:{
        required:true,
        type:String,
       }
    ,
    liked:Boolean,
    name:{
        type:String,
        required:true
    },
     discription:{
        type:String,
        required:true},
    calories:{
 type:Number
 },
    carbohydrate:{
        type:Number,

    },
    protins:{
        type:Number
    },
    fats:{
      type:Number
    }

    
})

const NurrientProfile = mongoose.model('NurrientProfile' , NutrientSchema)
module.exports =NurrientProfile

