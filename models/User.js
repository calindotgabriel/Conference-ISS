import mongoose from 'mongoose';

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

export default mongoose.model('User', UserSchema);