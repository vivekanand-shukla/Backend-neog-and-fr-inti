const {dbConnect} = require('./db/db.connect')
dbConnect()
const User = require('./models/user.model')
const post = require('./models/post.model')

const UserData = {
    name :"vivek",
    email: "vivek@gemail.com"
}


const addUSer= async()=>{

     try{
     const newUser = new User(UserData)
     await newUser.save()
   
     }catch(error){
          console.log("Error" ,error)
     }
}
// addUSer()

const postData = {
    title: "greeting",
    contant : "Have a good day!",
    auther: "6898c3133fbde86973779d2d"
}

const addPost  = async()=>{
    try{
       const newPost  =  new post(postData) 
       await newPost.save()
       console.log("Post  added successfully . ")
    }catch(e){
        console.log("Error : ", e)
    }
}

const getAllPost  = async ()=> {
      try{
        const getAllPost = await  post.find().populate("auther")
        console.log("all Posts : ", getAllPost )

      }catch(error){
        console.log("Error" , error)
      }
} 

// addPost()

getAllPost()