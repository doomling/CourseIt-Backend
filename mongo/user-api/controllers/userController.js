class UserController {
  constructor(userService) {
    this.userService = userService;
  };
 
  //El primero va a ser un método GET en la ruta "/" que nos va a devolver el contenido de la collection Users
  async getUsers(req, res){
    const users = await this.userService.getUsers();
    const { page } = req.query;
    let offset = 0;

    if(page){
      offset = 10 * (page - 1);
    }
    try{
      res.status(200).json(users);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir')
    }
    
  };
  
  //El segundo va a ser un método POST en la ruta "/add" el cual va a agregar un usuario a la collection users. La respuesta de este endpoint tiene que ser un 200 si todo sale bien o un 400 si todo sale mal (un ejemplo de que salga todo mal es que llegue vacío 'name')
  async postUser(req, res) {
    const { body, headers } = req;
    const { name } = body;
    const { token } = headers;
    const data = {
      name: name
    };
    //console.log(name)
    if(name && token == "r2r2"){

      try{
        await this.userService.addUsers(data);
        res.status(200).send(`Se agrego al usuario ${name} con éxito`);
      }catch(e){
        console.log(e);
        res.status(500).send('Error en la creación');
      }
    }else{
      console.log(name)
      !token ?
      res.status(404).send('Token incorrecto')
      : res.status(400).send('Falta información');
    }
  };

  //El tercero deberá ser un método PUT en la ruta /modify, y en el cual enviaremos el id del usuario que queremos modificar. También deberá recibir el nuevo valor a ser ingresado. La respuesta de este endpoint tiene que ser un 200 si todo salio bien o un 400 si todo sale mal (un ejemplo de que salga todo mal es que llegue vacío 'name')
  async putUser(req, res) {
    const { body, headers } = req;
    const { id, name } = body;
    const { token } = headers;

    const data = {
      name: name
    }

    if(name && id && token == 'r2r2'){
      try{
        await this.userService.modifyUsers(id, data);
        res.status(200).send(`Se modificó con éxito el id ${id} por el nombre ${name}`);
      }catch(e){
        console.log(e);
        res.status(500).send('Error en la modificación');
      }
    }else{
      !token ?
      res.status(404).send('Token incorrecto')
      : res.status(400).send('Falta información');
    }
  };

  //El cuarto deberá ser un método DELETE en la ruta /delete/:id, y en el cual enviaremos el id del usuario que queremos borrar.
  async deleteUser(req, res){
    const { body, headers, params} = req;
    const { id } = params;
    const { name } = body;
    const { token } = headers;

    if(id && name && token == 'r2r2'){
      try{
        await this.userService.deleteUsers(id);
        res.status(200).send(`Se borro con éxito el id ${id} con el nombre ${name}`);
      }catch(e){
        res.status(500).send('Error en la eliminación');
      }
    }else{
      res.status(400).send('Falta información');
    }
  }
}

module.exports = UserController;