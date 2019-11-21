const express = require("express");
app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

//Pass in url variable to allow navbar to update the active page

app.get("/", (req, res) => {
    var url = req.url;
    res.render("home", {url: url});
});

app.get("/about", (req, res) => {
    var url = req.url;
    res.render("about", {url: url});
});

app.get("/services", (req, res) => {
    var url = req.url;
    res.render("services", {url: url});
});

app.get("/contact", (req, res) => {
    var url = req.url;
    res.render("contact", {url: url});
});

app.listen(3000, () => {
    console.log("AW Server listening on 3000");
});