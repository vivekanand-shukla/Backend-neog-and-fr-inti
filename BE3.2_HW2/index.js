const express = require("express")
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
  res.send("express server")
})

const movies = [

  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },

  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }

];


app.post("/movies" ,(req,res)=>{
    const Newmovies = req.body
    if(!Newmovies.title || !Newmovies.director ||  !Newmovies.year){
        res.status(404).json({error:"you sould add tiltle , director, year of movie"})
    }else{
        movies.push(Newmovies)
        res.status(201).json({massage:"you have succesfuly added movie ", movie:Newmovies})
    }

})

app.get('/movies' ,(req,res)=>{
    res.send(movies)
})

const items = [

  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},

 { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }

];
app.post('/items', (req,res)=>{
 
    const newitem = req.body
    if(!newitem.itemName || !newitem.color || !newitem.quantity ){
        res.status(404).json({error: "first write name color and quantity of item "})
    }
    else{
        items.push(newitem)
        res.status(201).json({massage:"data addddes sucessfyly " ,itemaaaa :newitem})
        
    }

})
app.get("/items",(req,res)=>{
    res.send(items)
})


app.listen(3000,()=>{
    console.log("db connected sucessfuly")
})


