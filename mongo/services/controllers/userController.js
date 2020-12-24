class UserController{
  constructor(userService){
    this.userService = userService;
  };

  //get de users
  async getUser(req, res){
    const user = await this.userService.getUser();
    try{
      res.status(200).json(user);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir');
    }
  };

  async postUser(req, res){
    const { name, user, password, age } = req.body;
    const userData = {
      name: name,
      user: user,
      password: password,
      age: age
    };

    if(userData){
      try{
        await this.userService.addUser(userData);
        res.status(200).send('Se agrego al usuario con éxito');
      }catch(e){
        console.log(e);
        res.status(500).send('Error en la creación');
      }
    }else{
      res.status(400).send('Falta información');
    }
  };

  async getUserId(req, res){
    const { id } = req.params;
    const user = await this.userService.getUserId(id);
    try{
      res.status(200).json(user);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir');
    }
  };

  async getUserHandler(req, res){
    const { handle } = req.params;
    const user = await this.userService.getUserHandler(handler);
    try{
      res.status(200).json(user);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir');
    }
  };
}

module.exports = UserController;