const express = require('express');
const app = express();


const port = 5000;

//application level middleware
app.use(function(req, res, middle) {
    console.log("I am application level middle")
    middle();
})


app.get("/", function(req, res) {
        res.send("Home page");

    })
    //route level middleware
app.use("/about", function(req, res, next) {
    console.log("I am about middleware")
    next();
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