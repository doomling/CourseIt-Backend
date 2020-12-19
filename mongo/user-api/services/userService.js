const User = require('./../models/userModel');

class UserService {
  getUsers() {
    const query = User.find();
    return query;
  };

  addUsers(name){
    const newUser = new User(name);
    return newUser.save();
  };

  modifyUsers(id, name) {
    const userModify = User.findOneAndUpdate({_id: id}, name).exec();
    return userModify;
  };

  deleteUsers(id){
    const query = User.deleteOne({_id: id}, function (err) {
      if(err){
        console.log('Successful deletion');
      };
    });
    return query;
  };
 };
 
 module.exports = UserService;