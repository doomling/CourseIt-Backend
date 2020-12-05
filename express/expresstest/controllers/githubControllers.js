const axios = require("axios");

class githubControllers {

  //Queremos crear una API con una ruta dinámica [GET] /user/:id que busque la informacion del usuario ingresado en la API de Github y nos devuelva todo
  async getUser(req, res){
    const dataGithub = await axios.get(`https://api.github.com/users/${req.params.user}`);
    res.json(dataGithub.data);
  }

  //Crear otra ruta /user/:id/details que busque la informacion del usuario ingresado en la API de Github
  //Limitar la información que nos devuelve a: "Nombre, empresa y bio"
  async getDetails(req, res){
    const dataGithub = await axios.get(`https://api.github.com/users/${req.params.user}`);
    const details = {
      name: dataGithub.data.name,
      bio: dataGithub.data.bio,
      company: dataGithub.data.company
    }
    res.send(details);
  }

  //A la misma ruta del ejercicio anterior agregarle en la información que devuelve nuestra edad y gusto de helado favorito (tip: ...)
  async newGetDetails(req, res){
    const dataGithub = await axios.get(`https://api.github.com/users/${req.params.user}`);
    const details = {
      name: dataGithub.data.name,
      bio: dataGithub.data.bio,
      company: dataGithub.data.company
    }
    const newDetails = {...details, age: 26, favoritIcecream: 'No me gusta el helado'}
    res.send(newDetails);
  }

  //Utilizando la misma lógica del ejercicio 0 devolver una lista de los primeros 150 números primos
  //Utilizando la poke api https://pokeapi.co/ devolver a que Pokemon representa ese número en el siguiente formato
  getPrimos(req, res){
    
  }
}

module.exports = githubControllers;