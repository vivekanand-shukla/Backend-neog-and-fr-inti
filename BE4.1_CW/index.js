const Movie = require("./models/movies.models") 
 const {initializedDtaBase} = require("./db/db.connect") 
 const express = require("express")
 const app =express()
 initializedDtaBase() 
 app.use(express.json())


async function  readMovieByTitle(movieTitle){
  try{
  const movie =  await   Movie.findOne({title : movieTitle})
        return movie
  }catch(e){
       throw e
  }
     
}
app.get('/movies/:title' , async(req,res)=>{
   try{
    const movie =  await readMovieByTitle(req.params.title)
    if(movie){
      res.json(movie)
    }else{
      res.status(404).json({error:"movie not found"})
    }

   }catch(e){
    res.status(500).json({error:"Failed to fetch movie"})
   }
})

// readMovieByTitle('Dilwale Dulhania Le Jayenge')

// to get  all the movies in the database

async function readAllMovies(){
     try{
         const allMovies = await Movie.find()
          return allMovies
     }catch(e){
         console.log(e)
     }
}
app.get('/movies' ,async (req,res)=>{
  try{
    const movies = await readAllMovies()
     if(movies.length !=0 ){
        res.json(movies)
     }else{
        res.status(404).json({error:"no movies found"})
     }
  }catch(error){
     res.status(500).json({error:"failed to fetch movies "})
  }
})
// readAllMovies()

// get movie by director name 

async function ReadMovieByDirector(directorName){
   try{
     const movieByDirector = await Movie.findOne({director : directorName })
   return  movieByDirector

   }catch(e){
         console.log(e)
   }



}
// ReadMovieByDirector('Kabir Khan')
app.get('/movies/director/:directorName', async (req,res)=>{
   try{
    const movies = await ReadMovieByDirector(req.params.directorName)
     if(movies.length !=0){
      res.json(movies)
     }else{
        res.status(404).json({error: "No movie found . "})
     }
   }catch(error){
    res.status(500).json({error:"failed to fetch movies "})
   }
})

async function readMovieByGenre(genreName) {
  try {
    const movieByGenre = await Movie.find({ genre: genreName })
    return movieByGenre
  } catch (error) {
    console.log(error)
  }
}
app.get('/movies/genres/:genreName' ,async (req,res)=>{
    try{
      const movies = await readMovieByGenre(req.params.genreName)
      if(movies.length !=0){
        res.json(movies)
      }else{
         res.status(404).json({error: "No movie found . "})
      }

    }catch(error){
      res.status(500).json({error:"failed to fetch movies "})
    }
})

const PORT = 3000
app.listen(PORT, ()=>{
  console.log("server is connected on port 3000")
})