const axios = require('axios');
//Un método post que nos permita crear un pokemon, para eso le vamos a enviar solamente el nombre y una imagen a través de un formulario (front)
//Un método GET que nos permita ver toda la lista de pokemones cargados con sus datos y nos permita paginar los resultados en hasta 10 pokemones por request
//Un método PUT que nos permita guardar editar un pokemon por nombre o id (id de pokemon, no object id) para agregarle los siguientes campos traidos de la poke api: id, height, weight y type
//Un método DELETE que reciba como parámetro un nombre o id y en vez de borrar la entrada le agregue un campo que se llame disabled con el valor true

class PokeController{
  constructor(pokeService){
    this.pokeService = pokeService;
  };

  //post pokemon
  async addPokemon(req, res){
    const { name } = req.body;
    const { path } = req.file;
    
    const pokemon = {
      name: name,
      image: path,
      error: false
    };

    if(pokemon){
      try{
       await this.pokeService.addPokemon(pokemon);
        res.status(200).send('AAdded to pokemon successfully');
      }catch(e){
        console.log(e);
        res.status(500).send('Add error');
      };
    }else{
      res.status(400).send('Information is missing');
    };
  };

  //get pokemon con su paginado
  async getPokemon(req, res){
    const { page } = req.query;
    let offset = 0;
    const limit = 10;
    
    if(page){
      try{
        offset = 10 * (page - 1);
        const pokemon = await this.pokeService.getPokemon(offset, limit);
        res.status(200).json(pokemon);
      }catch(e){
        console.log(e);
        res.status(500).send('Error receiving');
      };
    }else{
      try{
        const pokemon = await this.pokeService.getPokemon();
        res.status(200).json(pokemon);
      }catch(e){
        console.log(e);
        res.status(500).send('Error receiving');
      };
    };
  };

  //put pokemon
  async putPokemon(req, res){
    const { name } = req.params;
    const pokemonName = await this.pokeService.searchPokemon(name);
    
    if(pokemonName){
      const pokemonApi = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokemon = {
        id: pokemonApi.data.id,
        height: pokemonApi.data.height,
        weight: pokemonApi.data.weight,
        type: pokemonApi.data.types[0].type.name
      };

      if(pokemon){
        try{
          await this.pokeService.editPokemon(name, pokemon);
          res.status(200).send('Modification was successful');
        }catch(e){
          console.log(e);
          res.status(500).send('Modification error');
        };
      }else{
        res.status(400).send('Information is missing');
      };
    }else{
      res.status(404).send('Pokemon not found')
    };
  };

  //'delete' pokemon
 async deletePokemon(req, res){
    const { name } = req.params;
    const pokemonName = await this.pokeService.searchPokemon(name);

    if(pokemonName){
      const pokemon = {
        disabled: true
      };

      if(pokemon){
        try{
          await this.pokeService.editPokemon(name, pokemon);
          res.status(200).send('Disabled was added successfully');
        }catch(e){
          console.log(e);
          res.status(500).send('Error adding');
        };
      }else{
        res.status(400).send('Information is missing');
      };
    }else{
      res.status(404).send('Pokemon not found');
    }
  }
};

module.exports = PokeController;