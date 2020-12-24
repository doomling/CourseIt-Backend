const User = require('./../models/userModel');

class UserService{

  //get de los users
  getUser(){
    const query = User.find();
    return query;
  };

  //agregar usuarios
  addUser(user){
    const newUser = new User(user);
    return newUser.save();
  };

  getUserId(id){
    const query = User.findOne({_id: id}).exec();
    return query;
  };

  getUserHandler(handler){
    const query = User.findOne({user: handler}).exec();
    return query;
  };
}

module.exports = UserService;