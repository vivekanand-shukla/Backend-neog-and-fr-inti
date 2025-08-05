const Model = require('./models/Restaurant.models')
const {dbConnect} = require('./db/db.connect')
dbConnect()

const newRestaurant = {
  name: "Cha Cha",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$(11-30)",
  reservationsNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};

 async function addResturant(newRestaurant){
    const ResDATa = new Model(newRestaurant)

    const saveData =await ResDATa.save()
    console.log("The saved data is : " ,saveData )
}
addResturant(newRestaurant)