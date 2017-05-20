import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Api Index')
})
router.get('/users', (req, res) => {
  res.send('Users API endpoint')
});

module.exports = router;
