const mongoose = require("mongoose")
const carSchema = new mongoose.Schema({
    model:String,
    releaseYear : Number,
    make : String
})
const Car = mongoose.model('Car' , carSchema)

module.exports = Car;