const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:String,
    contant:String,
    auther:{type :mongoose.Schema.Types.ObjectId  ,ref:"User"}


})


const Post = mongoose.model('Post' , postSchema)
module.exports  = Post

