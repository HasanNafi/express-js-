const express = require('express');
const multer = require('multer');
const app = express();
const multerApp = multer();

const port = 8000;


//res.send()  indicate to the body 
//res.end()  indicate to the end situation of the present code 

//......................................................................//
//......................................................................//

//Response status code
app.get("/", function(req, res) {
    res.send("Home page");
    //res.status(401).send("simple string")    for changing  the status code
})

//......................................................................//
//......................................................................//
//different methodes
app.post("/about", function(req, res) {
    res.send("About page");
})

app.put("/contact", function(req, res) {
    res.send("Contact page");
})

app.delete("/service", function(req, res) {
    res.send("Service page");
})


//......................................................................//
//......................................................................//
//Response JSON

app.get("/JSON", function(req, res) {
    //res.send("JSON response code");
    let myJson = [{
            name: "Anik",
            occupaion: "Engr.",
            age: "24"
        },
        {
            name: "Hasan",
            occupaion: "Engr.",
            age: "24"
        },
        {
            name: "Nafi",
            occupaion: "Engr.",
            age: "24"
        }
    ]
    res.json(myJson);
})

//......................................................................//
//......................................................................//
//Response Download

app.get("/download", function(req, res) {
    res.download("puppy.jpg");
})


//......................................................................//
//......................................................................//
//Response Redirect

app.get("/Bangladesh", function(req, res) {
    res.redirect("http://localhost:8000/India");
})

app.get("/India", function(req, res) {
    res.send("this is India");
})

//......................................................................//
//......................................................................//

//response header
app.get("/header", function(req, res) {

    res.append("name", "Anik Hasan Nafi");
    res.append("age", " 24 years");
    res.append("City", "Dhaka");

    res.status(201).send("this is body section");
})

//......................................................................//
//......................................................................//
//response cookie set
app.get("/cookie", function(req, res) {

    res.cookie("name", "Anik Hasan Nafi");
    res.cookie("age", " 24 years");
    res.cookie("City", "Dhaka");

    res.send("Cookie set successfully");
})

//......................................................................//
//......................................................................//

//response cookie clear
app.get("/cookieClear", function(req, res) {

    res.clearCookie("name");
    res.clearCookie("age");
    //res.clearCookie("City", "Dhaka");

    res.send("Cookie clear successfully");
})

//......................................................................//
//......................................................................//

// Get request query with url 
app.get("/urlQuery", function(req, res) {

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " " + lastName);
})

//......................................................................//
//......................................................................//

// Get header request query with url 
app.get("/urlHeader", function(req, res) {

    let firstName = req.header("firstName"); //Place this firstName in the header section of postman
    let lastName = req.header("lastName"); //place this lastName in the header section of postman

    res.end(firstName + " " + lastName);
})

//......................................................................//
//......................................................................//

// Post request query with url 
app.post("/postUrlQuery", function(req, res) {

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " " + lastName);
})

//......................................................................//
//......................................................................//

// Post header request query with url 
app.post("/postUrlHeader", function(req, res) {

    let firstName = req.header("firstName"); //Place this firstName in the header section of postman
    let lastName = req.header("lastName"); //place this lastName in the header section of postman

    res.end(firstName + " " + lastName);
})

//......................................................................//
//......................................................................//

// working with json body 

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/jsonBody", function(req, res) {

    let jsonData = JSON.parse(req.body);
    // let jsonString = JSON.stringify(jsonData);
    // res.send(jsonString);
    let name = jsonData['name'];
    let city = jsonData['city'];
    res.end(name + " " + city);

})

//......................................................................//
//......................................................................//

//working with multipart form data
app.use(multerApp.array());
app.use(express.static('public'));
app.post("/formData", function(req, res) {

    let reqBody = req.body;
    res.end(JSON.stringify(reqBody));

})

//......................................................................//
//......................................................................//

app.listen(port, function() {
    console.log("server run success");
})