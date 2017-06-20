import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/User';
import config from './config';


const router = express.Router();
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Got request with ${username}`);
  User.findOne({username: username, password: password})
    .exec().then((user) => {
      console.log('Mongo found ' + username)
      if (user) { 
        const id = user.get('_id');
        const username = user.get('username');
        console.log(`id: ${id} username: ${username}`);
        const token = jwt.sign({ id: id, username: username }, config.jwtSecret);
        console.log(`token: ${token}`);
        res.json({
          username : username,
          token: token
        }); 
      }
      res.status(401).json({ errors : 'No such user!'})
    })
    .catch((err) => {
      res.status(401).json({ errors : err});
    })
});

export default router;
