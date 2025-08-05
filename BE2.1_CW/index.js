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
async function createMovie(newMovie){
     try{
        const movie = new Movie(newMovie)
        const saveMovie = await movie.save()
        console.log("new movie Data ", saveMovie)

     }catch(e){
          throw e
     }

 }
 createMovie(newMovie)

