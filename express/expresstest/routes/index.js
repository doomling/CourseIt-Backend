const express = require('express');
const router = express.Router();

router.get('/users/:name', function(req, res, next) {
  res.send(`Hola usuario: ${req.params.name} tiene ${req.query.edad}`);
});

router.get('/multiplication/:number', function (req, res, next) {
  const number = Number(req.params.number * 2);
  res.send(`${number}`);
});

router.get('/palindromo/:word', function (req, res, next) {
  let word = req.params.word.toLowerCase();
  let palindromo = word.split('').reverse().join('');

  if(word == palindromo){
    res.send(`${req.params.word} es palíndromo ya que al revés se lee ${palindromo}`)
  }else{
    res.send(`${req.params.word} NO es palíndromo ya que al revés se lee ${palindromo}`)
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola');
});

module.exports = router;
