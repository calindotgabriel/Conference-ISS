var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {

  mongoose.connect('mongodb://admin:admin@ds161018.mlab.com:61018/conf', function(err, res) {
    if (err) {
      console.log('DB Connection Failed: ' + err);
    } else {
      console.log("DB Connection succeded.");
    }
  })  

  

  var user = new User({
    email: 'a@bc.com',
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
