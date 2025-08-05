const mongoose = require("mongoose");

const facebookPostSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true, 
  },
  datePosted: {
    type: Date,
    required: true, 
  },
  content: {
    type: String,
    required: true, 
  },
 reactions: {
    likes: Number,
    comments: Number,
    shares: Number
  },
  imageUrl: String, 
}, { timestamps: true });

const Post = mongoose.model("Post", facebookPostSchema);

module.exports = Post;
