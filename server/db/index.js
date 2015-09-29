var mysql = require('mysql');

var connection = mysql.createConnection({
  user: "root",
  password: "",
  database: "fileDealer_db"
});

connection.connect();

module.exports = {

  createGameName: function(params, cb) {
      var gameTable = "INSERT into gameTable(game_name) VALUES(?)";
      connection.query(gameTable, params, function(err, results){
        if(err){
          console.log(err);
        }
        else{
          //gameId = results.insertId
          cb(results.insertId);
        }
      });
  },
  createTreasureInfo: function(params, cb){
    var queryStr = "INSERT into treasureInfo(gameId, timelineKey, lat, long, hint) VALUES(?)"; 
    var lon = params.geolocation;
    // connection.query(queryStr, params);
  },
  getPlayerContact: function(params,cb) {

  }
};

// module.exports.createNewGame("hunt");
// gameName
// timelineKey, geolocation{lat:, long}, hint, image

// module.exports = connection;