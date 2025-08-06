const express = require("express")
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
  res.send("Express server")
})

const movies = [

  { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },

  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },

  { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 }

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

app.delete('/movies/:id',(req,res)=>{
    const movieId = req.params.id
    const index = movies.findIndex(movie => movie.id == movieId)
    if(index=== -1){
        res.status(404).json({error:"movie not found "})
    }else{
        movies.splice(index,1)
        res.status(200).json({massage: "you deleted movie successfuly"})
    }
})

app.get('/movies' ,(req,res)=>{
    res.send(movies)
})

const items = [

  { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},

  { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 },

  { id: 3, itemName: 'Plate', color: 'Off-White', quantity: 6 }

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
app.delete('/items/:id',(req,res)=>{
    const itemId = req.params.id
    const index  = items.findIndex(item => item.id == itemId)
    if(index === -1){
      res.status(404).json({error : "item not found"})
    }else{
        items.splice(index,1 )
        res.status(200).json({massage: "item deleted successfuly"})
    }
})
app.get("/items",(req,res)=>{
    res.send(items)
})

app.post('/movies/:id',(req,res)=>{
    const movieId = parseInt(req.params.id)
    const updatedData = req.body
    const dataToUpdate = movies.find(i => i.id === movieId)
    if(!dataToUpdate ){
        res.status(404).json({error:"movie not found"})
    }else{
        if(!updatedData.title || !updatedData.director ||!updatedData.year){
            res.status(400).json({error:"fisrt enter title director and year"})
        }else{
               Object.assign(dataToUpdate ,updatedData)
               res.status(200).json({message:"movie updted successfuly" , movie:dataToUpdate})
        }
    }
})

app.post('/items/:id' , (req,res)=>{
    const itemId = parseInt(req.params.id)
    const updatedData = req.body
    const dataToUpdate = items.find(item => item.id === itemId)
    if(!dataToUpdate){
        res.status(404).json({error:"item not found"})

    }else{
        if(!updatedData.itemName || !updatedData.color || !updatedData.quantity){
            res.status(400).json({error:"first enter itemname itemcolor  and quantity"})
        }else{
            Object.assign(dataToUpdate , updatedData)
            res.status(200).json({message :"data updated successfully"})
        }
    }

})


app.listen(3000,()=>{
    console.log("db connected sucessfuly")
})


