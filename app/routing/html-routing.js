var path = require("path");

// creating a path and exporting it out
module.exports = function(app){
    app.get("/Survey", function (req,res){
    res.sendFile(path.join(__dirname + "/../public/survey.html"));

    });
    app.use(function(req,res){
        res.sendFile(path.join(__dirname + "/..public/index.html"));
    })
    
};