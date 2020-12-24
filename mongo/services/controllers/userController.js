class UserController{
  constructor(userService){
    this.userService = userService;
  };

  //get de users
  async getUser(req, res){
    try{
      const user = await this.userService.getUser();
      res.status(200).json(user);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir');
    };
  };

  //post de users
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
      };
    }else{
      res.status(400).send('Falta información');
    };
  };

  //get de users por id
  async getUserId(req, res){
    const { id } = req.params;
    
    try{
      const user = await this.userService.getUserId(id);
      res.status(200).json(user);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir');
    };
  };

  //get de users por handler
  async getUserHandler(req, res){
    const { handler } = req.params;
    
    try{
      const user = await this.userService.getUserHandler(handler);
      res.status(200).json(user);
    }catch(e){
      console.log(e);
      res.status(500).send('Error en recibir');
    };
  };
}

module.exports = UserController;