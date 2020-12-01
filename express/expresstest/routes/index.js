const express = require('express');
const router = express.Router();

router.get('/test', function(req, res, next) {
  res.send('Test');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola');
});

module.exports = router;
