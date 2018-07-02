// Dependcies

var express = require('express');
var bodyParser = require('body-parser');
var path = require ('path');

// the server being set
var app = express();
var PORT = process.env.PORT || 8080;
// parsing 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routes
require('./app/routing/api.js')(app);
require('./app/routing/html-Routing.js')(app);


app.listen(PORT, function(){
    console.log("The Port hears you :" + PORT);
});





