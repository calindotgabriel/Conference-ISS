var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    id: mongoose.Schema.ObjectId,
    email: String,
    password: String
  });

module.exports = mongoose.model('User', UserSchema);