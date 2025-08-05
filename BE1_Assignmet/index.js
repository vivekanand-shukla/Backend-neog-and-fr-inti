const {connectDB} = require('./db/db.connnect')
connectDB()
const Model = require('./models/Cars.models')
const fs = require('fs')
const fileRead = fs.readFileSync('CarsData.json' ,'utf-8')
const Cars = JSON.parse(fileRead)

function seedData(){
    try{
   for(const car of  Cars){
   const carData = new Model({
          brand:car.brand,
  model: car.model,
  year: car.year,
  bodyStyle: car.bodyStyle,
  fuelType: car.fuelType,
  transmission: car.transmission,
  engine: car.engine,
  mileage: car.mileage,
 color: car.color,
  price: car.price,
  condition: car.condition,
  description: car.description,
  photos: car.photos,
  inMarket: car.inMarket,

   })

   console.log(carData)
   carData.save()
   }

    }catch(e){
      console.log('an error while uploading data :', e)
    }


}
seedData()