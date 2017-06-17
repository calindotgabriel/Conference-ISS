import express from 'express';
const router = express.Router();

const user = {
  username: "patina",
  password: "patinat"
}

router.get('/login', (req, res) => {
  res.json(user);
});

module.exports = router;
