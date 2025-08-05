const mongoose = require('mongoose')
require('dotenv').config()
const mongoUri = process.env.MONGODB

async function  dbConnect(){
 await    mongoose.connect(mongoUri).then(()=> console.log('db connected sussfully')).catch(e=> console.log('an error occured while feching the data' , e))
}

module.exports = {dbConnect}
