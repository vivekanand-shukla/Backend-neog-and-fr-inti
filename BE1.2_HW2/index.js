const { connectDb }  = require("./db/db.connect")
connectDb()
const  model = require("./models/booksData.models")

const fs = require("fs")
const fileRead = fs.readFileSync('booksData.json' , 'utf-8' )
const booksData = JSON.parse(fileRead)
async  function seedData(){
    try{
         for(const bookdata of booksData){
           const Bookdata  = new model({
               title: bookdata.title,
               author: bookdata.author,
               publishedYear: bookdata.publishedYear,
               genre: bookdata.genre,
               language: bookdata.language,
               country: bookdata.country,
               rating: bookdata.rating,
               summary: bookdata.summary,
               coverImageUrl: bookdata.coverImageUrl,
    })
           console.log(Bookdata.title)
        await   Bookdata.save()
    }
  }catch(error){
         console.log("an error occured , : " ,error )
    }
}
seedData()
