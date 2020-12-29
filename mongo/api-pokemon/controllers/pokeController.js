const axios = require('axios');

class PokeController{
  constructor(pokeService){
    this.pokeService = pokeService;
  };

  async addPokemon(req, res){
    const { name } = req.body;
    console.log(req.file)
    const { image } = req.file;
    
    const pokemon = {
      name: name,
      image: image
    };

    if(pokemon){
      try{
       const newPokemon = await this.pokeService.addPokemon(pokemon);
        res.status(200).send('Agregado al pokemon con exito').json(newPokemon);
      }catch(e){
        console.log(e);
        res.status(500).send('Error al recibir');
      };
    }else{
      res.status(400).send('Falta informacion');
    };
  };

  async getPokemon(req, res){
    const pokemon = await this.pokeService.getPokemon();

    if(pokemon){
      try{
        res.status(200).json(pokemon);
      }catch(e){
        console.log(e);
        res.status(500).send('Error en recibir');
      };
    };
  }
}

module.exports = PokeController;