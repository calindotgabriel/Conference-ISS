import express from 'express';
import mongoose from 'mongoose';
import User from '../models/User';
import path from 'path';

var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // mongodb://heroku_kxrbmjj6:atbn8epinkrs7ckqfm8afvic0r@ds133450.mlab.com:33450/heroku_kxrbmjj6
  // var dbUrl = 'mongodb://admin:admin@ds161018.mlab.com:61018/conf';
  
  res.sendFile(path.join(__dirname, './index.html')); 
});

let verifyMongose = () => {
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
}

module.exports = router;
