const mongoose = require('mongoose')
require('dotenv').config() 
const mongoUri = process.env.MONGODB
 
  const initializedDtaBase= async()=>{
  await  mongoose.connect(mongoUri).then(()=>{
        console.log("Conneced to dataBase")
    }).catch((error=>{
        console.log("Error conecting to data base" ,error)
    }))
  }

  module.exports ={initializedDtaBase}
   