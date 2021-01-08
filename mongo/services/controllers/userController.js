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
      res.status(500).send('Error receiving');
    };
  };

  //post de users
  async postUser(req, res){
    const { name, user, password, age, isAdmin } = req.body;
    const userData = {
      name: name,
      user: user,
      password: password,
      age: age,
      isAdmin: isAdmin
    };

    // mismo problemas que con el controller de sales, te conviene el condicional hacerlo directamente con algo que venga en la req 
    // if (req.body && req.body.name)
    
    if(userData && isAdmin == true){
      try{
        await this.userService.addUser(userData);
        res.status(200).send('User added successfully');
      }catch(e){
        console.log(e);
        res.status(500).send('Creation error');
      };
    }else{
      res.status(400).send('Information is missing');
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
      res.status(500).send('Error receiving');
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
      res.status(500).send('Error receiving');
    };
  };
}

module.exports = UserController;
