// first get the express
const express = require("express");


// Now create a server
const app = express(); // server created successfully
const port = 4000;


// Serving req and sending response
app.use("/details",(req, res)=>{
    // sending data in json like format
    res.send({"Name":"Aman Kumar", "Age":23, "Networth": 0})
})
app.use("/home",(req, res)=>{
    res.send("Welcome to Homepage")
})

app.use("/contact", (req, res)=>{
    res.send("You are on contact page")
})

// default page
// default page router will be placed after all the router because no matter what router name it will be directly redirected to default page
// router starts matching from top to down 
app.use("/", (req, res)=>{
    res.send("Default page")
})

app.listen(port, ()=>{
    console.log(`Listening at port ${port} `)
})

// routing first home page
