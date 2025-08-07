const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello, This is Express Assignment Server.")
})

app.use(express.json());
const albums = [

  { id: 1, title: 'Abbey Road', artist: 'The Beatles', year: 1969 },

  { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },

  { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 }
//   { id: 1, title: 'Rumours', artist: 'Fleetwood Mac', year: 1977 }

];


app.post('/albums' , (req,res)=>{
    const newdata = req.body
    if(!newdata.title || !newdata.artist  || !newdata.year){
        res.status(404).json({error:"first write title artest and year"})
    }else{
        albums.push(newdata)
        res.status(201).json({massage:"data added sucessfuly" , album:newdata})

    }
})

app.get('/albums' , (req,res)=>{
    res.send(albums)
})


app.delete('/albums/:id' , (req,res)=>{
    const albumId = req.params.id
     index = albums.findIndex( a =>  a.id == albumId)

     if(index=== -1){
        res.status(404).json({error:"album not found "})
    }else{
        albums.splice(index,1)
        res.status(200).json({massage: "you deleted deleted successfuly"})
    }
})
app.post('/albums/:id' , (req,res)=>{
    const albumsId = parseInt(req.params.id)
    const updatedData = req.body
    const dataToUpdate = albums.find(a => a.id === albumsId)
    if(!dataToUpdate){
        res.status(404).json({error:"item not found"})

    }else{
        if(!updatedData.title || !updatedData.artist || !updatedData.year){
            res.status(400).json({error:"first enter item name item color and quantity"})
        }else{
            Object.assign(dataToUpdate , updatedData)
            res.status(200).json({message :"data updated successfully"})
        }
    }

})

app.listen(3000, ()=>{
    console.log('server connected successfuly')
})
