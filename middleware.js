const express = require('express');
const app = express();


const port = 5000;


app.use(function(req, res, middle) {
    console.log("I am application level middle")
    middle();
})


app.get("/", function(req, res) {
    res.send("Home page");

})
app.get("/about", function(req, res) {
    res.send("About page");

})
app.get("/services", function(req, res) {
    res.send("Service page");

})


app.listen(port, function() {
    console.log("server run success");
})