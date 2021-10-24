const express = require('express');

const app = express();
const port = 8000;

app.get("/", function(req, res) {
    res.send("Home page");
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