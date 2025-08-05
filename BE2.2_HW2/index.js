const {connectDb} = require('./db/db.connect')
const Models = require('./models/Hotel.models')




 connectDb()
const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$(31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
};




async  function addHotel(newHotel){
     let HotelData = new Models(newHotel)
  let a = await   HotelData.save()
  console.log("The hotel data is : ", a )
}


// addHotel(newHotel)

const newHotel1 = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$(31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
};


const newHotel2 = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
  priceRange: "$(61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
};



// addHotel(newHotel2)

async function readALLHotels (){
try{
  const allHotels = await  Models.find()

  console.log(allHotels)

}catch(e){
  
    console.log("an error occured while fetching data" , e) 
}
}


 async function getHotelDetailsByName (a){
try{
  await  connectDb()
  const findHotel = await  Models.findOne({name:a })

  console.log(findHotel)

}catch(e){
  
    console.log("an error occured while fetching data" , e) 
}
}

// getHotelDetailsByName("Lake View")
 async function HotelWithParkingSpace (){
try{
  await  connectDb()
  const HotelwithParking = await  Models.find({isParkingAvailable:true })

  console.log(HotelwithParking)

}catch(e){
  
    console.log("an error occured while fetching data" , e) 
}
}
// HotelWithParkingSpace()




 async function ResturantAvailable (){
try{
  await  connectDb()
  const ResturantAvailable = await  Models.find({isRestaurantAvailable:true })

  console.log(ResturantAvailable)

}catch(e){
  
    console.log("an error occured while fetching data" , e) 
}
}



 async function HotelWithMidRange (){
try{
  await  connectDb()
  const ResturantAvailable = await  Models.find({priceRange:'$$$ (31-60)' })

  console.log(ResturantAvailable)

}catch(e){
  
    console.log("an error occured while fetching data" , e) 
}
}


 async function HotelWithHighRange (){
try{
  await  connectDb()
  const ResturantAvailable = await  Models.find({priceRange:'"$$$$ (61+)"' })

  console.log(ResturantAvailable)

}catch(e){
  
    console.log("an error occured while fetching data" , e) 
}
}
 async function Hotelwithrating4 (){
try{
  await  connectDb()
  const ResturantAvailable = await  Models.find({rating:4.0 })

  console.log(ResturantAvailable)

}catch(e){
  
    console.log("an error occured while fetching data" , e) 
}
}


 async function HotelWithPhoneNumber (){
try{
  await  connectDb()
  const findWithPhone = await  Models.find({phoneNumber:"+1299655890" })

  console.log("with given phone number",  findWithPhone)

}catch(e){
  
    console.log("an error occured while fetching data" , e) 
}
}

HotelWithPhoneNumber()




