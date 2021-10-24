const express = require('express');

const app = express();
const port = 8000;

app.get("/", function(req, res) {
    res.send("New express js app");
})

app.listen(port, function() {
    console.log("server run success");
})