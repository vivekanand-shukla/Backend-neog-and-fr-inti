const mongoose = require("mongoose")
const twitterSchema = new  mongoose.Schema({
    profilePic:String,
    fullName: String,
    userName:String,
    bio:String,
    companyName:String,
    City:String,
    portfolio:String,
    twitterHandle:String,
    followersCount:Number,
    followingCount:Number,
    isOnline:Boolean,

})
const Twitter = mongoose.model("Twitter" ,twitterSchema)
module.exports = Twitter