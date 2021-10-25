const express = require('express');

const app = express();
const port = 8000;


//res.send()  indicate to the body 
//res.end()  indicate to the end situation of the present code 

app.get("/", function(req, res) {
    res.send("Home page");
    //res.status(401).send("simple string")    for changing  the status code
})

app.post("/about", function(req, res) {
    res.send("About page");
})

app.put("/contact", function(req, res) {
    res.send("Contact page");
})

app.delete("/service", function(req, res) {
    res.send("Service page");
})

app.listen(port, function() {
    console.log("server run success");
})