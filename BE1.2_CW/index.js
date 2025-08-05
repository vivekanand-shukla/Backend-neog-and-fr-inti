const movie = require("./models/movies.models") //model
 const {initializedDtaBase} = require("./db/db.connect")  // connect
 initializedDtaBase()  //connect
const fs = require("fs")  //file

const jsondata = fs.readFileSync('movies.json' ,"utf-8") // file
const Moviesdata = JSON.parse(jsondata)  //file

function seedData(){
    try{

        for(const Moviedata of Moviesdata){
            const newMovie = new movie({
                title: Moviedata.title,
                realeseYear:Moviedata.releaseYear,
                genre:Moviedata.genre,
                director:Moviedata.director,
                actors:Moviedata.actors,
                    language      :Moviedata.language,
                    country :Moviedata.country,
                    rating:Moviedata.rating,
                    plot:Moviedata.plot,
                    Awards:Moviedata.awards,
                    posterUrl:Moviedata.posterUrl,
                    trailerUrl:Moviedata.trailerUrl
            })
         newMovie.save()
        }
    }catch(error){
        console.log("error seeing the data" ,error)

    }
}
seedData()
