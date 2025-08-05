require('dotenv').config()
const PORT= process.env.PORT  || 3000
const express = require('express')
const app = express()

app.get("/", (req,res)=>{
    res.send("Hello, Express JS")
})

app.get("/products" ,(req,res)=>{
    res.send("Browse our products here.")
})
app.get("/services" , (req,res)=>{
    res.send("Explore our services.")
})
app.get("/faq", (req,res)=>{
    res.send('Frequently Asked Questions')
})
app.get("/gallery" ,(req,res)=>{
    res.send("View our gallery.")
})

app.listen(PORT,()=>{
    console.log("server stated on the port : ", PORT)
})
