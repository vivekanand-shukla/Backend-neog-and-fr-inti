const mongoose = require("mongoose")
require('dotenv').config()
const  mongoUri = process.env.MONGODB

async function  connectDb (){
await  mongoose.connect(mongoUri).then(()=>  {console.log("database is connected") }).catch((e)=>{  console.log("error occupied while connecting" , e)}
   
)

}

module.exports ={  connectDb}

