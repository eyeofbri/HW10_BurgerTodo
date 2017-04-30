// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
var path = require("path");
// var myTemplate  = require( path.join(__dirname + "/../public/.myTemplate.hbs");

var lunches = [
  {
    text: "Beet & Goat Cheese Salad with minestrone soup."
  }, {
    text: "Pizza, two double veggie burgers, fries with a big glup"
  }
];
// Routes
// =============================================================
module.exports = function(app) {

  // index route loads view.html
  app.get("/", function(req, res) {
  	//original, w js
    // res.sendFile(path.join(__dirname + "/../public/view.html"));

    //with handlesbars
 	db.Todo.findAll({}).then(function(db_result) {
      res.render("index", {todos: db_result});
    });

  });

};





