const express = require('express')
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{
    res.send('Hellow Express!')
})

app.get('/about', (req,res)=>{
       res.send('This is the About Page')
})


app.get('/contact',(req,res)=>{
    res.send("Contact Us on sone email id. at @ contact ")
})

const PORT = process.env.PORT  || 3000
app.listen(PORT ,()=>{
    console.log("Server is running on port" ,PORT)
})
