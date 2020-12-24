const express = require('express');
const router = express.Router();
const UserController = require('./../controllers/userController');
const UserService = require('./../services/userService');
const DrinkService = require('./../services/drinkService');
const userInstance = new UserController(new UserService(), new DrinkService());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Holi');
});

router.get('/user/:name', function(req, res, next){
  userInstance.getUserByName(req, res);
})

module.exports = router;
