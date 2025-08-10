const Model = require('./models/Restaurant.models')
const {dbConnect} = require('./db/db.connect')
dbConnect()
const express = require('express')
const app =express()

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


app.use(express.json())

 async function addResturant(newRestaurant){

  try{
const ResDATa = new Model(newRestaurant)

    const saveData =await ResDATa.save()
   return saveData 
  }catch(e){
    throw e
  }
    
}


app.post("/restaurants" ,async (req,res)=>{
    try{
      const savedRes = await addResturant(req.body)
      res.status(201).json({message:"resturant added successfully" ,resturant :savedRes })

    }catch(error){
        res.status(500).json({error :"failed to add resturant" ,details :error.message})
    }
})



// addResturant(newRestaurant)
// addResturant(newRestaurant1)


async function readAllResturent(){
try{

     const allResturant =   await Model.find()
        return allResturant

       }catch(e){
         throw e
  }
} 
// readAllResturent()

app.get('/' , async (req,res)=>{
  try{
    const resturants = await readAllResturent()
     if(resturants.length != 0){
       res.json(resturants)
     }else{
        res.status(404).json({error : "resturent not found"})
     }


  }catch(error){
      res.status(500).json({error : "failed to fetch movies "})
  }
})

async function resturantByitsName(Name){
  try{
      const getResturantByName = await Model.findOne({name: Name})
       return getResturantByName
  }catch(e){
    console.log(e)
  }
}

app.get('/restaurants/:restaurantName' , async(req,res)=>{
  try{
   const oneRes = await  resturantByitsName(req.params.restaurantName)
    if(oneRes){
      res.json(oneRes)
    }else{
      res.status(404).json("resturant nnot found")
    }

  }catch(error){
       res.status(500).json("failed to fetch resturant")
  }
})

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

async function phone(p){
 try{
  const searchByPhone = await Model.findOne({phoneNumber:p})
     return searchByPhone
 }catch(e){
   throw e
 }
}
 app.get('/restaurants/directory/:phoneNumber', async (req,res)=>{

  try{

    const resph = await phone(req.params.phoneNumber)
    if(resph){
      res.send(resph)
    }else{
        res.status(404).json({error: "data not found"})
    }

  }catch(error){
           res.status(500).json({error : "failed to fetch data "})
  }
   

 })


// phone()

async function cuisineName(cus){
 try{
  const cusine = await Model.find({cuisine:cus})
    return cusine
 }catch(e){
   throw e
 }
}

app.get('/restaurants/cuisine/:cuisineName' ,  async(req,res)=>{
  try{
   const cusine = await cuisineName(req.params.cuisineName)
   if(cusine){
    res.send(cusine)    
  }else{
    res.status(404).json({error : "resturant not found" })

  }

  }catch(error){
     res.status(500).json({message : "could not fetch the data"})
  }
 })
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

async function restaurantLocation(l){
  try{
const locationRes = await Model.findOne({location : l})
     return locationRes
  }catch(error){
       throw error
  }
     
}

app.get('/restaurants/location/:restaurantLocation' , async(req,res)=>{
  try{
    const resturantByLocation  = await restaurantLocation(req.params.restaurantLocation)
      if(resturantByLocation){
        res.send(resturantByLocation)
      }else{
        res.status(404).json({error :"data not found"})
      }

  }catch(error){
      res.status(500).json({error : "can not fetch the data"})
  }


})
async function deleteByid(id){
   try {
    const deleteRes =  await Model.findByIdAndDelete(id)

     return  deleteRes
   } catch (error) {
      throw error
   }
}

app.delete('/restaurants/:restaurantId' ,async (req,res)=>{
  try {
       const deleteRes = await deleteByid(req.params.restaurantId)
    if(deleteRes){
      res.status(201).json({message : "data deleated successfuly"})
    }

  } catch (error) {
      res.status(500).json({message: "deletion failed"})
  } 
     
})

// deleteResbyname({name:"Som Sarovar"})
app.listen(3000, () => console.log("Server is running on port 3000"));

