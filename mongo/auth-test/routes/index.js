const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Holi');
});

router.post('/api/login', passport.authenticate('local'), function(req, res, next) {
  return res.json({ ok: true});
});

router.get('/api/verify', function(req, res, next) {
  return res.json(req.user);
})

module.exports = router;
