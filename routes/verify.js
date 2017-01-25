"use strict";

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

const saltRounds = 10;

router.post('/', function(req, res, next){
  console.log("hello, we are in verify");
  var rawPw = req.body;
  console.log("rek dat body", req.body); //working
  knex('members')
    .where("username", req.body.username)
    .returning("password")
    .then(function(password) {
      console.log("we are in the then");
      var hashPw = password;
      bcrypt.compare(rawPw, hashPw, function(err, res){
        console.log("we are in bcrypt");
        if (true){
          //go to pg 2
          res.redirect('https://awtr.herokuapp.com/page2');
        } else {
          //err message
          res.render("/error", {message: "Please enter the correct password"});
        }
      })
    })//this closes then
    .finally(function(){
      knex.destroy();
    })//this closes finally
})//this closes post

module.exports = router;
