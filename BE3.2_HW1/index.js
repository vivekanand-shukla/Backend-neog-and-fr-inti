const express = require('express')
const app= express()
app.use(express.json())

app.get('/', (req,res)=>{
   res.send("Hello, Express server.")
})

const books = [

  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },

  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

];

const todos = [

  { id: 1, title: 'Water the plants', day: 'Saturday' },

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
app.listen(3000,()=>{
    console.log("server connected sucessflly on port 3000")
})
