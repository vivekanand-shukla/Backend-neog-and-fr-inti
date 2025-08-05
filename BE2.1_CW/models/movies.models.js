const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema({
     title:{
        type:String,
        required:true, }
        ,
    realeseYear :{
         type:Number,
         required:true,

    } ,
    genre:[{
        type:String,
        enum:['Action','Drama' ,'Comedy' ,'Romance' ,'Thriller','Fantasy', 'Si-Fi','Horror' ,'Sports','Musical' , 'Others'],

    }] 
    ,director:{
        type:String,
        required:true
    }  ,
    actors:[{
        type:String,

    }],
    language:{
        type:String,
        required:true,

    },
    country:{
        type:String,
        default:"India"
    },
    rating:{
        type:Number,
        min:0,
        max:10,
        default:0
    },
    plot:{
        type:String,

    },
    Awards:{
        type:String
    } ,
    posterUrl : {
        type:String,

    },

    trailerUrl:{
        type:String
    },
   
}, {
        timestamps:true
    })

    const Movie = mongoose.model('Movie' , movieSchema)

    module.exports =Movie