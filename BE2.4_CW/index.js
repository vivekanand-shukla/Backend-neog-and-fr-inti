const Movie = require("./models/movies.models") 
 const {initializedDtaBase} = require("./db/db.connect") 
 initializedDtaBase() 

const newMovie = {
    title: "new Movie",
    realeseYear: 2023,
    genre: [ "Drama"],
director: "Aditya Roy Chopra",
    actors: ["Actor1", "Actor2"],
    language: "Hindi",
    country: "India",
    rating: 6.1,
    plot: "A young man and woman fall in love on a  Austia  trip.",
    awards: "IFA Awards",
    posterUrl: "https://example.com/new-poster1.jpg",
    trailerUrl: "https://example.com/new-trailer1.mp4"
  }
// Create
async function createMovie(newMovie){
     try{
        const movie = new Movie(newMovie)
        const saveMovie = await movie.save()
        console.log("new movie Data ", saveMovie)

     }catch(e){
          throw e
     }

 }
//  createMovie(newMovie)
//read
async function  readMovieByTitle(movieTitle){
  try{
  const movie =  await   Movie.findOne({title : movieTitle})
        console.log(movie)
  }catch(e){
       throw e
  }
     
}

// readMovieByTitle('Dilwale Dulhania Le Jayenge')

// to get  all the movies in the database

async function readAllMovies(){
     try{
         const allMovies = await Movie.find()
         console.log(allMovies)
     }catch(e){
         console.log(e)
     }
}
// readAllMovies()

// get movie by director name 

async function ReadMovieByDirector(directorName){
   try{
     const movieByDirector = await Movie.findOne({director : directorName })
     console.log(movieByDirector)

   }catch(e){
         console.log(e)
   }



}
// ReadMovieByDirector('Kabir Khan')

// update 

async function updateMovie(movieId, dataToUpdate){
try{
  const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate ,{new :true})
  console.log(updatedMovie)

}catch(e){
  console.log("error in updating movie Rating  :", e)
}
}

// updateMovie('688b4d30e4d860bb14706fc1' ,{rating:8.0})

// find one data and update its value
async function updateMovieDettail (movieTitle, dataToUpdate){
try{
  const updatedMovie = await Movie.findOneAndUpdate({title:movieTitle}, dataToUpdate ,{new:true})
  console.log(updatedMovie)

}catch(e){
  console.log("error in changing text  :", e)
}
}

// updateMovieDettail('Kabhi Khushi Kabhie Gham' ,{realeseYear:2001})

// delete
async function deleteMovie(movieID ,){
   try {
    const deleteMovie = await Movie.findByIdAndDelete(movieID)


   } catch (error) {
     console.log("error in deleating movie : " ,error)
   }


}

// deleteMovie('688d856f3046801bde942464')

async function deleteMovieFromDb(movieTitle){
  try {

    const deleteMovie = await Movie.findOneAndDelete({title: movieTitle })
     console.log("This movie was deleted : ",deleteMovie)
  } catch (error) {
    console.log("Error in movie Deletation :" ,error)
  }


}

deleteMovieFromDb('Lagaan')
