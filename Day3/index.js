const express = require("express")

const app = express();

app.use(express.json())
let bookStore =
[
    {id: 1, Name: "Atomic Habit", Author: "James Clear"},
    {id: 2, "Name": "The Subtle Art Of Not Giving A Fuck", Author: "Mark Manson"},
    {id:3, Name: "Eat That Frog", Author: "Brian Tracy"},
    {id:4, Name: "Head First Java", Author:"Kathy Sierra"},
    {id:5, Name: "C++ Primer", Author:"Stanley B.Lippman"},
    {id:6, Name: "Designing Data-Intensive Applications", Author:"Martin Kleppmann"}
]

// creating API to get all the book information from BookStore

app.get('/book', (req, res)=>{

    res.send(bookStore)
})

// Creating an API to get book information with id

app.get('/book/:id',(req, res)=>{
    // first get id from req
    const id = parseInt(req.params.id)
    const book = bookStore.find(infor => infor.id === id);
    res.send(book)
})

// Add a new book into book store

app.post('/book',(req, res)=>{
    // We will get new book information into req body
    bookStore.push(req.body)

    res.send("Data Saved Successfully")
})



app.listen(3000, ()=>{
    console.log("Listening at port 3000")
})