const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  bio: { type: String },
  profilePicUrl: { type: String },
  followingCount: { type: Number, default: 0 },
  followerCount: { type: Number, default: 0 },
  companyName: { type: String },
  location: { type: String },
  portfolioUrl: { type: String }
}, {
  timestamps: true 
});

const Profile = mongoose.model("Profile", userProfileSchema);
module.exports = Profile;
