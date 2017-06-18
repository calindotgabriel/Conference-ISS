import express from 'express';
const router = express.Router();

import User from '../models/User';

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({username: username, password: password})
    .exec().then((user) => {
      if (user) { 
        res.json(user); 
      }
      res.status(401).json({ errors : 'No such user!'})
    })
    .catch((err) => {
      res.status(401).json({ errors : err});
    })
});

export default router;
