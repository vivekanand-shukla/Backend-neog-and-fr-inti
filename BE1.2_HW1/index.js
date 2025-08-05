const Profileof = require("./models/userProfile.models")
const {connectDb} = require("./db/db.connect")
connectDb()
const fs = require("fs")
const profilesfile = fs.readFileSync('userProfile.json' ,'utf-8')
const profiles =JSON.parse(profilesfile)

function seedData(){

    try{
         for(const  profile of profiles){
        const profileData = new Profileof({
            fullName:profile.fullName,
            username:profile.username,
            bio:profile.bio,
            profilePicUrl:profile.profilePicUrl,
            followingCount:profile.followingCount,
            followerCount:profile.followerCount,
            companyName:profile.companyName,
            location:profile.location,
            portfolioUrl:profile.portfolioUrl,
        })
     profileData.save()
     }
    }catch(e){
           console.log("an error while apploading data " ,e)
    }
    
}
seedData()
