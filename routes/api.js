import express from 'express';
const router = express.Router();

const user = {
  username: "patina",
  password: "patinat"
}

router.get('/', (req, res) => {
  res.json(user);
})
router.get('/users', (req, res) => {
  res.send('Users API endpoint')
});

module.exports = router;
