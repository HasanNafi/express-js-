const express = require('express');

const app = express();
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


app.listen(port, function() {
    console.log("server run success");
})