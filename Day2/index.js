const express = require("express");

const app = express();


app.use(express.json());

// Now do CRUD operation

app.get("/users",(req, res)=>{

    res.send({"Name":"Aman", "Age":22});
})

app.post("/user", (req, res)=>{
    console.log("Data saved successfully")
    console.log(req.body);
    console.log(typeof req.body.Age);

    res.send("Data saved successfully")
})


app.use("/", (req, res)=>{
    res.send({"Name" : "Aman", "Age": 45});
})





const port = 3600
app.listen(port, ()=>{
    console.log(`Listening at port ${port}`)
})