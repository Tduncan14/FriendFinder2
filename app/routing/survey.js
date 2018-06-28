
// It changes transform the survey input into an output.

// 

  const friendList = require('../data/friends.js');


  module.exports = function(app){
      // grabs the json and displays it

      app.get('/api/pal', function(req,res){

      res.json(pal);
      });

      app.post('/api/pal', function(req,res){
        //
        
        var friendFind  = req.body.scores;
        var friendArray = [];
        var friendCount = 0;
        var friendMatch = 0;


        // runs through the friendList.

        for(let i = 0; i<friendList.length; i++){
            var scoreCompare =0;
            // compare score with friend number value

        for(var j = 0; j < friendFind.length; j++){

             scoreCompare += (Math.abs(parseInt(friendList[i].scores[j]) -parseInt(newFriendScores[j])));

        }
        ///// push into the array
            friendArray.push(scoreCompare);
        }
            for(var i = 0; i< friendArray.length; i++){
                if(friendArray[i] <= friendArray[friendMatch]){
                    friendMatch = i;
                }
            }
      })

      // returns the data.

      var friendsForever = friendList[friendMatch];
      res.json(bff);


      friendList.push(req.body);
  }