var express = require('express');
var app = express();
var request = require("request");

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    var movieName = req.query.search;
    var url = "http://www.omdbapi.com/?s="+movieName+"&apikey=thewdb";
    request(url, function(error, response, body) {
    if(!error && response.statusCode ==200){
        var data = JSON.parse(body);
   res.render("results", {data: data});
}
});
});

app.listen(3000, "127.0.0.1", function(){
    console.log("movie app has started!");
});

//["Search"][0]["Title"]);
