const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userControllers');;

const UserInstance = new userController();

router.get('/', function(req, res, next) {
  UserInstance.getUser(req, res);
});

router.post('/add', function (req, res, next) {
  UserInstance.postUser(req, res);
});

router.put('/modify', function (req, res, next) {
  UserInstance.putUser(req, res);
});

router.delete('/delete/:indice', function (req, res, next) {
  UserInstance.deleteUser(req, res);
})
module.exports = router;
