const mongoose = require('mongoose')
require('dotenv').config()
const mongoUri = process.env.MONGODB
const  connectDb= async()=>{
await mongoose.connect(mongoUri).then(()=>{  console.log("mongodb is connected")}).catch(e=> {console.log("an error occured while connecting" ,e)} )


}

module.exports =  {connectDb}
