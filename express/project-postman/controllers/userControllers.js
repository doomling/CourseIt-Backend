const axios = require('axios');

class UserController {
  constructor() {
    this.names = [];
  }

  //Método GET en la ruta "/" que nos va a devolver un array de nombres que vayamos agregando (al principio va a devolver un array vacio)
  getUser(req, res) {
    res.send(this.names);
  }

  //Método POST en la ruta "/add" el cual va a agregar una variable 'name' al array del que hablamos en el primer endpoint. 
  //La respuesta de este endpoint tiene que ser un 200 si todo salio bien o un 400 si todo sale mal (un ejemplo de que salga todo mal es que llegue vacío 'name')
  postUser(req, res) {
    const { body, headers } = req;
    const { name } = body;
    const { token } = headers;

    if(name && token){
      this.names.push(name);
      res.status(200).send('Usuario agregado con éxito');
    }else{
      !token ? 
      res.status(401).send('Token incorrecto')
      : res.status(400).send('Falta información');
    };
  };

  //método PUT en la ruta /modify, y en el cual enviaremos un número de índice que representa la posición del array de nombres que queremos modificar. 
  //También deberá recibir el nuevo valor a ser ingresado. 
  //La respuesta de este endpoint tiene que ser un 200 si todo salio bien o un 400 si todo sale mal (un ejemplo de que salga todo mal es que llegue vacío 'name')
  putUser(req, res) {
    const { body, headers } = req;
    const { name, i } = body;
    const { token } = headers;

    if(name && i && token){
      this.names.splice(i, 1, name);
      res.status(200).send(`Se modifico el indice ${i} con el usuario ${name}`);
    }else{
      !token ? 
      res.status(401).send('Token incorrecto')
      : res.status(400).send('Falta información');
    };
  };

  //método DELETE en la ruta /delete/:indice, y en el cual enviaremos un número de índice que representa la posición del array de nombres que queremos borrar.
  deleteUser(req, res) {
    const { body, params, headers } = req;
    const { indice } = params;
    const { name } = body;
    const { token } = headers;

    if(indice && name && token){
      this.names.splice(indice, 1);
      res.status(200).send(`Se borro el usuario ${name} ubicado en el indice ${indice}`);
    }else{
      !token ? 
      res.status(401).send('Token incorrecto')
      : res.status(400).send('Falta información');
    };
  };
}

module.exports = UserController;