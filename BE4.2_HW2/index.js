const { connectDb } = require('./db/db.connect')
const Models = require('./models/Hotel.models')
const express = require('express')
const app = express()
connectDb()
app.use(express.json())
//datas
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



// function to add hotel
async function addHotel(newHotel) {
  let HotelData = new Models(newHotel)
  let a = await HotelData.save()
  return a
}
app.post("/hotels" ,async (req,res)=>{
    try{
      const savedhotel = await addHotel(req.body)
      res.status(201).json({message:"hotel added successfully" ,hotel :savedhotel })

    }catch(error){
        res.status(500).json({error :"failed to add hotel"})
    }
})


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

// function to read all hotel
async function readALLHotels() {
  try {
    const allHotels = await Models.find()

    return allHotels

  } catch (e) {

    console.log("an error occured while fetching data", e)
  }
}

app.get('/hotels' , async function(req,res){
     try{
       const allHotels = await readALLHotels()
       if(allHotels.length > 0){
         res.send(allHotels)
       }else{
          res.status(404).json({error:"not found the data"})
       }
         
       

     }catch(error){
        res.status(500).json({error:"cannot fetch the data."})
     }


} )





// function to get hotel details by name
async function getHotelDetailsByName(a) {
  try {
    await connectDb()
    const findHotel = await Models.findOne({ name: a })

    console.log(findHotel)

  } catch (e) {

    console.log("an error occured while fetching data", e)
  }
}



// getHotelDetailsByName("Lake View")

// fuction to find hotel with  parking space
async function HotelWithParkingSpace() {
  try {
    await connectDb()
    const HotelwithParking = await Models.find({ isParkingAvailable: true })

    console.log(HotelwithParking)

  } catch (e) {

    console.log("an error occured while fetching data", e)
  }
}
// HotelWithParkingSpace()



// function to find a resturant which is available
async function ResturantAvailable() {
  try {
    await connectDb()
    const ResturantAvailable = await Models.find({ isRestaurantAvailable: true })

    console.log(ResturantAvailable)

  } catch (e) {

    console.log("an error occured while fetching data", e)
  }
}


// mid range hotel function
async function HotelWithMidRange() {
  try {
    await connectDb()
    const ResturantAvailable = await Models.find({ priceRange: '$$$ (31-60)' })

    console.log(ResturantAvailable)

  } catch (e) {

    console.log("an error occured while fetching data", e)
  }
}

// high rete hotel function
async function HotelWithHighRange() {
  try {
    await connectDb()
    const ResturantAvailable = await Models.find({ priceRange: '"$$$$ (61+)"' })

    console.log(ResturantAvailable)

  } catch (e) {

    console.log("an error occured while fetching data", e)
  }
}
// rating 4 hotel
async function Hotelwithrating4() {
  try {
    await connectDb()
    const ResturantAvailable = await Models.find({ rating: 4.0 })
    console.log(ResturantAvailable)
  } catch (e) {
    console.log("an error occured while fetching data", e)
  }
}
 
// find hotel by phone number
async function HotelWithPhoneNumber(p) {
  try {
    await connectDb()
    const findWithPhone = await Models.find({ phoneNumber: p })
     return findWithPhone
  } catch (e) {
    console.log("an error occured while fetching data", e)
  }
}

// HotelWithPhoneNumber()


// update hotel by id
async function UpdateDataById(id, data) {
  try {
    const updatedData = await Models.findByIdAndUpdate(id, data, { new: true })
    console.log("the data upated: ", updatedData)

  } catch (e) {
    throw e
  }

}
// UpdateDataById( '688e2bc9bbd3e45b0848646c',  {checkOutTime:"11:00 AM"} ,)


// update hotel by name
async function UpdateDataByName(name, data) {
  try {
    const updatedData = await Models.findOneAndUpdate({ name: name }, data, { new: true })
    console.log("the data upated: ", updatedData)

  } catch (e) {
    throw e
  }

}

// update hotel by phone number
async function UpdateDataByPno(pno, data) {
  try {
    const updatedData = await Models.findOneAndUpdate({ phoneNumber: pno }, data, { new: true })
    console.log("the data upated: ", updatedData)

  } catch (e) {
    throw e
  }

}
// UpdateDataByPno( '+1299655890' ,  {phoneNumber :'+1997687392'} ,)

// delete hotel by id 
async function deleteHotelById(id) {
  try {

    let HotelDelete = await Models.findByIdAndDelete(id)
    console.log(HotelDelete)
  } catch (error) {
    console.log('an error occured :', error)
  }

}

// delete hotel by phone number 
async function deleteHotelByPhoneNumber(phone) {
  try {

    let HotelDelete = await Models.findOneAndDelete({ phoneNumber: phone })
    console.log(HotelDelete)
  } catch (error) {
    console.log('an error occured :', error)
  }

}

// deleteHotelByPhoneNumber('+1234555890')




app.get('/hotels/:hotelName', async (req, res) => {
  try {
    const hotel =getHotelDetailsByName(req.params.hotelName)
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ error: "Hotel not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch hotel" });
  }
});

// 3. GET hotel by phone number
app.get('/hotels/directory/:phoneNumber', async (req, res) => {
  try {
    const hotel = await HotelWithPhoneNumber(req.params.phoneNumber)
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ error: "Hotel not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch hotel" });
  }
});

// 4. GET hotels by rating
app.get('/hotels/rating/:hotelRating', async (req, res) => {
  try {
    const hotels = await Models.find({ rating: parseFloat(req.params.hotelRating) });
    if (hotels.length > 0) {
      res.json(hotels);
    } else {
      res.status(404).json({ error: "No hotels found with this rating" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch hotels" });
  }
});

// 5. GET hotels by category
app.get('/hotels/category/:hotelCategory', async (req, res) => {
  try {
    const hotels = await Models.find({ category: req.params.hotelCategory });
    if (hotels.length > 0) {
      res.json(hotels);
    } else {
      res.status(404).json({ error: "No hotels found in this category" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch hotels" });
  }
});


app.listen(3000 , ()=>{
   console.log("server is running on port 3000")
})










