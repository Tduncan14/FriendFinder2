var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
     
        var bestMatch = {
            name: "",
            photo:"",
            difference :100
        };

        console.log(req.body);

        // post  is parse with results

        var data = req.body; //userData
        var score = data.scores; //userscores

        console.log(score); // id there is a problem

        // calculate the differences in the data
        var absoluteDifference = 0 ; // total difference

        // creat nested loop to search through friends

        for ( var i = 0 ; i< friends.length;i++){

            console.log(friends[i]); 
            absoluteDifference = 0;

         // loop throught the scores

        for( var j = 0 ; j < friends[i].scores[j] ; j++){
                   // calculate the difference between the scores

           absoluteDifference = Math.abs(parseInt( score[j])- parseInt(friends[i].scores[j]));


           if(absoluteDifference <= bestMatch.friendDifference) {

            bestMatch.name = friends[i].name;
            bestMatch.photo = friends[i].photo;
            bestMatch.friendDifference = absoluteDifference ;
           }
        }
     }
       // pushing the user data
       friends.push(data);

       res.json(bestMatch);
    });
}
