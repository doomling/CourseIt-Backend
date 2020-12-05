const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController.js');

const UserInstance = new userController;


router.get('/users/:name', function (req, res, next) {
  UserInstance.getUser(req, res)
});

router.get('/multiplication/:number', function (req, res, next) {
  UserInstance.getMultiplication(req, res)
});

router.get('/palindromo/:word', function (req, res, next) {
  UserInstance.getPalindromo(req, res);
})

/*
//Utilizando Express crear una ruta que reciba como parametro nuestro nombre y lo muestre en pantalla. 
//Pasarle por query nuestra edad y mostrarla también 
router.get('/users/:name', function(req, res, next) {
  res.send(`Hola usuario: ${req.params.name} tiene ${req.query.edad}`);
});

//Utilizando Express crear una ruta que reciba como parámetro un número y nos muestre en pantalla el mismo número multiplicado por 2
router.get('/multiplication/:number', function (req, res, next) {
  const number = Number(req.params.number * 2);
  res.send(`${number}`);
});

//Utilizando Express crear una ruta que reciba como parámetro una palabra, y nos devuelva en pantalla si la misma es o no un palíndromo
router.get('/palindromo/:word', function (req, res, next) {
  let word = req.params.word.toLowerCase();
  let palindromo = word.split('').reverse().join('');

  if(word == palindromo){
    res.send(`${req.params.word} es palíndromo ya que al revés se lee ${palindromo}`)
  }else{
    res.send(`${req.params.word} NO es palíndromo ya que al revés se lee ${palindromo}`)
  }
}); */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola');
});

module.exports = router;
