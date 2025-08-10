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


// const newMovie = {
//     title: "new Movie",
//     realeseYear: 2023,
//     genre: [ "Drama"],
// director: "Aditya Roy Chopra",
//     actors: ["Actor1", "Actor2"],
//     language: "Hindi",
//     country: "India",
//     rating: 6.1,
//     plot: "A young man and woman fall in love on a  Austia  trip.",
//     awards: "IFA Awards",
//     posterUrl: "https://example.com/new-poster1.jpg",
//     trailerUrl: "https://example.com/new-trailer1.mp4"
//   }
async function createMovie(newMovie){
     try{
        const movie = new Movie(newMovie)
        const saveMovie = await movie.save()
          return saveMovie

     }catch(e){
          throw e
     }

 }
//  createMovie(newMovie)

app.post("/movies" ,async (req,res)=>{
    try{
      const savedMovie = await createMovie(req.body)
      res.status(201).json({message:"movie added successfully" ,movie :savedMovie })

    }catch(error){
        res.status(500).json({error :"failed to add movie"})
    }
})

async function deleteMovie(movieId){
    try{
      const deleatedMovie =await Movie.findByIdAndDelete(movieId)
        return deleatedMovie
    }catch(error){
        throw error
    }
}

app.delete('/movies/:movieId' , async (req,res)=>{
  try{
    const deleatedMovie = await deleteMovie(req.params.movieId)
    res.status(201).json({message: "Movie deleated successfully"})


  }catch(e){
      res.status(500).json({error: "failed to delete a movie"})
  }
})


async function updateMovie(movieId ,dataToUpdate ){
  try{
    const updateMovie = await  Movie.findByIdAndUpdate(movieId ,dataToUpdate , {new :true})
      return updateMovie
  }catch(error){
     console.log("error in updateing movie", error)

  }

}

app.post('/movies/:movieId' ,async (req,res)=>{
  try {
    const updatedMovie = await  updateMovie(req.params.movieId , req.body)
    if(updatedMovie){
       res.status(200).json({message :"Movie updated successfully."})
    }else{
      res.status(404).json({error :"Movie not found"})
    }
  } catch (error) {
      res.status(500).json({error:  "Failed to update movie."})
  }
})



const PORT = 3000
app.listen(PORT, ()=>{
  console.log("server is connected on port 3000")
})