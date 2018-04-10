var express = require ("express");
var app = express();
var passport  = require('passport');
var session   = require('express-session');
var bodyParser = require("body-parser");
var db = require("./models");



var PORT = process.env.PORT || 3000;
app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});
 
 
app.listen(3000, function(err) {
 
    if (!err)
        console.log("Site is live");
    else console.log(err)
 
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

var env = require('dotenv').load();

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on PORT", PORT);

    });
});