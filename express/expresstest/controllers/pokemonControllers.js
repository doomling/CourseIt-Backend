const axios = require('axios');

class pokemonController {

  //Utilizando la misma lógica del ejercicio 0 devolver una lista de los primeros 150 números primos
  //Utilizando la poke api https://pokeapi.co/ devolver a que Pokemon representa ese número en el siguiente formato
    async getPokemonPrimes(req, res){
    function primes(num){

      if(num == 0 || num == 1 || num == 4){
        return false;
      }else if(num == 2 || num == 3){
        return true;
      }

      for(let i = 2; i < num / 2; i++){
        if(num % i == 0){
          return false;
        }
        return true;
      }
    }

    const arr = [];
    for(let i = 0; i < 150; i++){
      if(primes(i)){
        arr.push(i);
      }
    }
    
    
    const dataPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.number}`);

    const infoPokemon = {
      primeNumber: req.params.number,
      pokemonName: dataPokemon.data.forms[0].name
    }

    const numberPrime = arr.map((num) => {
      if(num == req.params.number){
        return infoPokemon;
      }
    }).filter((pokemon) => {
      return pokemon;
    });
   
    res.json(numberPrime);    
  }
}

module.exports = pokemonController;