const Pokemon = require('./../models/pokeModel');

class PokeService{
  addPokemon(pokemon){
    const newPokemon = new Pokemon(pokemon);
    return newPokemon.save();
  };

  getPokemon(page, limit){
    const query = Pokemon.find().skip(page).limit(limit).exec();
    return query;
  };

  searchPokemon(name){
    const pokemonSearch = Pokemon.findOne({name: name}).exec();
    return pokemonSearch;
  };

  editPokemon(name, pokemon){
    const pokemonEdit = Pokemon.findOneAndUpdate({name: name}, pokemon).exec();
    return pokemonEdit;
  };
};

module.exports = PokeService;