var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {
  // mongodb://heroku_kxrbmjj6:atbn8epinkrs7ckqfm8afvic0r@ds133450.mlab.com:33450/heroku_kxrbmjj6

  // var dbUrl = 'mongodb://admin:admin@ds161018.mlab.com:61018/conf';
  var dbUrl = 'mongodb://heroku_kxrbmjj6:atbn8epinkrs7ckqfm8afvic0r@ds133450.mlab.com:33450/heroku_kxrbmjj6';
  mongoose.connect(dbUrl, function(err, res) {
    if (err) {
      console.log('DB Connection Failed: ' + err);
    } else {
      console.log("DB Connection succeded.");
    }
  })  

  var user = new User({
    email: 'd@bc.com',
    password: 'woot'
  });

  user.save(function(err) {
    if (err) {
      console.log('Failed to save user : ' + err);
    } else {
      console.log('Succeded saving user ' + user);
    }
  })


  res.render('index', { title: 'Express' });
});

module.exports = router;
