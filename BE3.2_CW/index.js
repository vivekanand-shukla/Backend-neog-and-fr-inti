const express = require('express')
const app = express()

const cars=[ 
    {id:1 ,make:"toyota" , model:"camry"  ,year:2022}
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


const PORT =  3000
app.listen(PORT ,()=>{
    console.log(`server running on port ${PORT}`)
})