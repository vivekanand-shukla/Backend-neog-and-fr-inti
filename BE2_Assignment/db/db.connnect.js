const mongoose = require('mongoose')
require('dotenv').config()
const mongoUri = process.env.MONGODB

function connectDB(){

    mongoose.connect(mongoUri).then(()=>{console.log("database connected")}).catch((e)=> {console.log("connection failed")})
}
module.exports ={ connectDB}