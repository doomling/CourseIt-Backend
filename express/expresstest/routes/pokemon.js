const express = require('express');
const router = express.Router();
const pokemonController = require('./../controllers/pokemonControllers');

const PokemonController = new pokemonController;

router.get('/pokemonprimes/:number', function (req, res, next) {
  PokemonController.getPokemonPrimes(req, res);
});

module.exports = router;