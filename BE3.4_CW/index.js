const express = require('express')
const app = express()

const cars=[ 
    {id:1 ,make:"toyota" , model:"camry"  ,year:2022},
    {id:2 ,make:"toyota" , model:"camry"  ,year:2022},
    {id:3 ,make:"toyota" , model:"camry"  ,year:2022},
    {id:4 ,make:"toyota" , model:"camry"  ,year:2022},
    {id:5 ,make:"toyota" , model:"camry"  ,year:2022},
    {id:6 ,make:"toyota" , model:"camry"  ,year:2022},
    {id:7 ,make:"toyota" , model:"camry"  ,year:2022},
]

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("HEllo expres")
})
app.post('/cars' ,(req,res)=>{
    const newCar = req.body
    if(!newCar.make || !newCar.model || !newCar.year){
        res.status(400).json({error:"make model and year are required"})
    }else{
       cars.push(newCar) 
       res.status(201).json({message:"Car added successfuly . " , car:newCar})
    }
})
app.get('/cars',(req,res)=>{
    res.send(cars)
} )

app.delete('/cars/:id' ,(req,res)=>{
    const carId = req.params.id
    const index = cars.findIndex(car => car.id == carId)
    if(index === -1){
   res.status(404).json({error:'car not found '})
    }else{
        cars.splice(index ,1)
        res.status(200).json({massage:"car deleted sucessfuly"})
    }
    

})


app.post("/cars/:id" , (req,res)=>{
  const carId = parseInt(req.params.id)
  const updatedCar =  req.body
  const carToUpdate =  cars.find(car => car.id === carId)
  if(!carToUpdate){
    res.status(404).json({error:"car not found."})
  }else{

    if(!updatedCar.make  || !updatedCar.model || !updatedCar.year ){
        res.status(400).json({error: "make model and year are required. "})
    }else{
      Object.assign(carToUpdate ,updatedCar)
    res.status(200).json({massage: "car data updated successfully" ,car : carToUpdate})
    }
    
  }
})
const PORT =  3000
app.listen(PORT ,()=>{
    console.log(`server running on port ${PORT}`)
})