var path = require("path");

// export function to deliver the paths or html/

module.exports = function(app){
    app.get("/survey",function(req,res) {
       res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.use(function(req,res){
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });
}