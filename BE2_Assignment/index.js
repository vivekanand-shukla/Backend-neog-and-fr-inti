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
   carData.save() }  }catch(e){
      console.log('an error while uploading data :', e)  }}
// seedData()




const carData1 = {
  brand: "Ford",
  model: "Mustang",
  year: 2019,
  bodyStyle: "Convertible",
  fuelType: "Gasoline",
  transmission: "Automatic",
  engine: "5.0L V8",
  mileage: 25000,
  color: "Red",
  price: 3500000,
  condition: "Used",
  description: "Exciting Ford Mustang convertible with powerful V8 engine.",
  photos: [
    "https://example.com/mustang-photo1.jpg",
    "https://example.com/mustang-photo2.jpg",
    "https://example.com/mustang-photo3.jpg"
  ]
};

const carData2 = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
};


async function createCar(carData) {
  try {
    const newCar = new Model(carData);
    const savedCar = await newCar.save();
    console.log("Car created:", savedCar);
  } catch (error) {
    console.log("Error creating car:", error);
  }
}
                        
  //  createCar(carData1);              
  //  createCar(carData2);  

async function getAllCars() {
  try {
    const cars = await Model.find();
    console.log("All Cars:", cars);
  } catch (error) {
    console.log("Error reading cars:", error);
  }
}
  //  getAllCars();   

async function getCarsByBrand(brand) {
  try {
    const cars = await Model.find({ brand });
    console.log(`Cars of brand with your brand choise:`, cars);
  } catch (error) {
    console.log("Error occured:", error);
  }
}
//  getCarsByBrand("Ford");   



async function getCarsByColor(color) {
  try {
    const cars = await Model.find({ color });
    console.log(`Cars with color :`, cars);
  } catch (error) {
    console.log("Error reading cars by color:", error);
  }
}
//  getCarsByColor("Black"); 


async function updateCarPriceByModel(model, newPrice) {
  try {
    const updatedCar = await Model.findOneAndUpdate(
      { model },
      { price: newPrice },
      { new: true }
    );
    console.log("Updated car price:", updatedCar);
  } catch (error) {
    console.log("Error updating price:", error);
  }
}
//  updateCarPriceByModel("Corolla", 2300000); 


async function updateCarConditionByModel(model, newCondition) {
  try {
    const updatedCar = await Model.findOneAndUpdate(
      { model },
      { condition: newCondition },
      { new: true }
    );
    console.log("Updated car condition:", updatedCar);
  } catch (error) {
    console.log("Error updating condition:", error.message);
  }
}
//  updateCarConditionByModel("Model S", "Used");


async function deleteCarById(carId) {
  try {
    const deletedCar = await Model.findByIdAndDelete(carId);
    console.log("Deleted car:", deletedCar);
  } catch (error) {
    console.log("Error deleting car:", error.message);
  }
}

// deleteCarById('688d9f1e8effbd635042bbf3');   


async function deleteCarByBodyStyle(bodyStyle) {
  try {
    const deletedCar = await Model.findOneAndDelete({ bodyStyle });
    console.log(`Deleted car with body style:`, deletedCar);
  } catch (error) {
    console.log("Error deleting by body style:", error.message);
  }
}
 deleteCarByBodyStyle("Coupe");      