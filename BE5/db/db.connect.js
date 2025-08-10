require("dotenv").config();
const mongoose = require("mongoose");



function dbConnect (){
  const mongoURI = process.env.MONGODB;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });


}

module.exports = {dbConnect}
  


