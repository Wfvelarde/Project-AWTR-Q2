"use strict";

var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

const saltRounds = 10;

router.post('/', function(req, res, next){

  // console.log("hello, we are in verify");
  // console.log("req.body username is ", req.body.username)
  var rawPw = req.body.password;
  // console.log("rek dat body", req.body); //working
  knex('members')
    .where("username", req.body.username)
    .returning("password")
    .then(function(result) {
      console.log(result)
      console.log("we are in the then");
      var hashPw = result[0].password; //NOW RIGHT!!
      console.log("this is rawPw", rawPw);
      console.log("this is hashPw", hashPw);
      bcrypt.compare(rawPw, hashPw, function(err, result2){
        console.log("we are in bcrypt");
        if (result2) {
          //go to pg 2
          res.send({});
          console.log("we are in true === pg2");
        } else {
          //err message
          console.log(err);
          res.render("error", {message: "Please enter the correct password"});
        }
      })
    })//this closes then
    .finally(function(){
      // knex.destroy();
    })//this closes finally
})//this closes post

module.exports = router;
