// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var mysql = require("mysql");

var source = {
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Frogger123",
    database: " "
  }
};


var connection = mysql.createConnection(source.localhost);


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;