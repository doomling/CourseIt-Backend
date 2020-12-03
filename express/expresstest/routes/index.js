const express = require('express');
const router = express.Router();

router.get('/users/:name', function(req, res, next) {
  res.send(`Hola usuario: ${req.params.name} tiene ${req.query.edad}`);
});

router.get('/multiplication/:number', function (req, res, next) {
  const number = Number(req.params.number * 2)
  res.send(`${number}`);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola');
});

module.exports = router;
