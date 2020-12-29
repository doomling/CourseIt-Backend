const Pokemon = require('./../models/pokeModel');

class PokeService{
  addPokemon(pokemon){
    const newPokemon = new Pokemon(pokemon);
    return newPokemon.save();
  };

  getPokemon(){
    const query = Pokemon.find();
    return query;
  };
};

module.exports = PokeService;