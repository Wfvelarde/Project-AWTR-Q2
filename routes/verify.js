"use strict";

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

const saltRounds = 10;

router.post('/', function(req, res, next){
  console.log("hello, we are in verify");
  var rawPw = req.body.password;
  console.log("rek dat body", req.body); //working
  knex('members')
    .where("username", req.body.username)
    .returning("password")
    .then(function(password) {
      console.log("we are in the then");
      var hashPw = password; // this is wrong. Need to grab hashed pw from the database?
      console.log("this is rawPw", rawPw);
      console.log("this is hashPw", hashPw);
      bcrypt.compare(rawPw, hashPw, function(err, res){
        console.log("we are in bcrypt");
        if (res === true){
          //go to pg 2
          res.redirect('/page2');
          console.log("we are in true === pg2");
        } else {
          //err message
          console.log(err);
          res.render("/error", {message: "Please enter the correct password"});
        }
      })
    })//this closes then
    .finally(function(){
      knex.destroy();
    })//this closes finally
})//this closes post

module.exports = router;
