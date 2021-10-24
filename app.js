const express = require('express');

const app = express();
const port = 8000;

app.get("/", function(req, res) {
    res.send("Home page");
})

app.get("/about", function(req, res) {
    res.send("About page");
})

app.get("/contact", function(req, res) {
    res.send("Contact page");
})

app.get("/service", function(req, res) {
    res.send("Service page");
})

app.listen(port, function() {
    console.log("server run success");
})