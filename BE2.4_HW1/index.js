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



const newRestaurant1 = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$(11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
};


const newRestaurant2 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$(31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};



 async function addResturant(newRestaurant){

  try{
const ResDATa = new Model(newRestaurant)

    const saveData =await ResDATa.save()
    console.log("The saved data is : " ,saveData )
  }catch(e){
    throw e
  }
    
}
// addResturant(newRestaurant1)
// addResturant(newRestaurant2)


async function readAllResturent(){
try{

     const allResturant =   await Model.find()
       console.log(allResturant)

       }catch(e){
         throw e
  }
} 
// readAllResturent()

async function resturantByitsName(Name){
  try{
      const getResturantByName = await Model.findOne({name: Name})
      console.log(getResturantByName)
  }catch(e){
    console.log(e)
  }
}

// resturantByitsName('Yo China')
async function reservationWalaResturent(){
  try{

 const reservedResturant = await Model.find({reservationsNeeded : true})
   console.log(reservedResturant)
  }catch(e){
     throw e
  }
}

// reservationWalaResturent()

async function offerDeliveryRes(){
  try{

    const isOfferDelevery = await Model.find({isDeliveryAvailable:true})
    console.log(isOfferDelevery)
  }catch(e){
    throw e
  }

}

// offerDeliveryRes()

async function phone(){
 try{
  const searchByPhone = await Model.findOne({phoneNumber:"+1288997392"})
    console.log(searchByPhone)
 }catch(e){
   throw e
 }
}
// phone()

async function cusine(cus){
 try{
  const searchByPhone = await Model.find({cuisine:cus})
    console.log( "resturant with cusine italian",searchByPhone)
 }catch(e){
   throw e
 }
}
// cusine("Italian")

async function updateDataById(resturantId ,updateData){
  try{
    const updatedData = await Model.findByIdAndUpdate(resturantId , updateData ,{new:true}  )
             console.log("updated Data : ",updatedData)
  }catch(e){
      console.log('The Updated data is : ',e)
  }

}
// updateDataById('688deb6452adb3fb5c342f77' , {rating :4.1})


async function findByNameAndUpdate( FindTo,updateData){
  try{
    const updatedData = await Model.findOneAndUpdate({name: FindTo}, updateData ,{new:true}  )
             console.log("updated Data : ",updatedData)
  }catch(e){
      console.log('The Updated data is : ',e)
  }

}
// findByNameAndUpdate('Somi' , {name :'Som Sarovar'})
async function findByphoneNumberAndUpdate( FindTo,updateData){
  try{
    const updatedData = await Model.findOneAndUpdate({phoneNumber: FindTo}, updateData ,{new:true}  )
             console.log("updated Data : ",updatedData)
  }catch(e){
      console.log('The Updated data is : ',e)
  }

}
// findByphoneNumberAndUpdate('+1288997392' , {isDeliveryAvailable  :true})
//
async function deleteResById(id){
try {
   const a = await Model.findByIdAndDelete(id)
  console.log(a)
} catch (error) {
    console.log("There was an error occured while deleting resturant ...")
}
} 
// deleteResById('688d9b0e6238a00a763385c3')
async function deleteResbyname(name){
try {
   const a = await Model.findOneAndDelete(name)
  console.log(a)
} catch (error) {
    console.log("There was an error occured while deleting resturant ...")
}
} 
deleteResbyname({name:"Som Sarovar"})

