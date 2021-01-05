const User = require('./../models/userModel');

class UserService{

  getByName(name){
    const query = User.findOne({ name }).exec();
    return query;
  };
};

module.exports = UserService;