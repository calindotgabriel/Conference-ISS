import express from 'express';
import { jwt } from "jsonwebtoken";
const ACCEPTED_USERS = [ 'gelu', 'admin' ];

let router = express.Router();

router.post('/', (req, res) => {
  const { username } = req.body; 
  if (ACCEPTED_USERS.indexOf(username) > -1) {
    req.body.token = username;
    res.json(req.body);
  }
  else
    res.status(401).json({ error : 'Wrong Credentials'})
});


module.exports = router;
