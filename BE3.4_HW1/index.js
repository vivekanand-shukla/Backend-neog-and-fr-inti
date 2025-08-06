const express = require('express')
const app= express()
app.use(express.json())

app.get('/', (req,res)=>{
   res.send("Hello, From Express Server.")
})

const books = [

  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },

  { id: 3, title: '1984', author: 'George Orwell', year: 1949 }

];


const todos = [

  { id: 1, title: 'Water the plants', day: 'Saturday' },

  { id: 2, title: 'Go for a walk', day: 'Sunday' }

];



app.post('/books',(req,res)=>{
     const newBook = req.body
     if( !newBook.title || !newBook.author || !newBook.year ){
        res.status(400).json({error:"title author and year are required"})
     }else{
         books.push(newBook)
         res.status(201).json({massage:"Book added sucessfyly" , book:newBook})
     }
})

app.delete('/books/:id',(req,res)=>{
    const  bookId = req.params.id
    const index = books.findIndex(book => book.id == bookId)
    if(index === -1){
        res.status(404).json({error: "book not found"})
    }else{
        books.splice(index,1)
        res.status(200).json({message: "book deleted sucessfuly"})
    }
})

app.delete('/todos/:id' ,(req,res)=>{
    const todoId = req.params.id
    const index = todos.findIndex(todo => todo.id == todoId)
        if(index === -1){
            res.status(404).json({error : "todo not found"})
        }else{
            todos.splice(index ,1)
            res.status(200).json({massage:"todos deleted successfuly"})
        }
    
})

app.post('/todos',(req,res)=>{
    const newTodos = req.body
    if( !newTodos.id  || !newTodos.title  || !newTodos.day   ){
        res.status(400).json({error:"first input id title and day of todo"})
    }else{
        todos.push(newTodos)
        res.status(201).json({massage:"you todeo updated sucessfuly" ,todo:newTodos})
    }
})

app.get('/todos' ,(req,res)=>{
    res.send(todos)
})
app.get('/books',(req,res)=>{
    res.send(books)
})

app.post("/books/:id" ,(req,res)=>{
    const bookId = parseInt(req.params.id)
    const  updatedData = req.body
    const dataToUpdate = books.find( book => book.id === bookId)
  if(!dataToUpdate){
    res.status(404).json({error:"book not found"})
  }else{
    if(!updatedData.title || !updatedData.author || !updatedData.year){
        res.status(400).json({error:"title author year are required "})
    }else{
        Object.assign(dataToUpdate ,updatedData)
        res.status(200).json({message : "successfuly updated book data" ,book:dataToUpdate})
    }

  }

})

app.post("/todos/:id",(req,res)=>{
    const todoId = parseInt(req.params.id)
    const updatedData = req.body
    const dataToUpdate = todos.find( todo => todo.id === todoId)
    if(!dataToUpdate){
        res.status(404).json({error:"todo not found"})
    }else{
        if(!updatedData.title || !updatedData.day){
            res.status(400).json({error : "title  and day are required"})
        }else{
            Object.assign(dataToUpdate ,updatedData)
            res.status(200).json({message:"sucessfuly updated todo data ",book :dataToUpdate})
        }
    }
})





app.listen(3000,()=>{
    console.log("server connected sucessflly on port 3000")
})
