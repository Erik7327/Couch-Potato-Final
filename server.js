var express = require ("express");
var bodyParser = require("body-parser");
var db = require("./config/models/user.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("Listening on PORT", PORT);

    });
});