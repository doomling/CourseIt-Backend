const express = require('express');
const router = express.Router();
const ProductController = require('./../controllers/productController');
const ProductService = require('./../services/productService');
const UserController = require('./../controllers/userController');
const UserService = require('./../services/userService');

const ProductInstance = new ProductController(new ProductService());
const UserInstance = new UserController(new UserService());

//Queremos crear una API para el manejo de productos: [GET] /products - [GET] /products/:id - [POST] /products - [PUT] /products/:id
//Queremos crear un nuevo modelo de datos (en el mismo proyecto) pero para usuarios: [GET] /users - [GET] /users/:id - [GET] /users/:handler - [POST] /users

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Holi');
});

//get /products
router.get('/products', function(req, res, next) {
  ProductInstance.getProduct(req, res);
});

//post /products
router.post('/products', function(req, res, next) {
  ProductInstance.postProduct(req, res);
});

//Crear un nuevo endpoint que devuelva solo los productos que tengan entrega gratis
router.get('/products/freeshipping', function(req, res, next) {
  ProductInstance.getProductFilter(req, res)
})

//get /products/:id
router.get('/products/:id', function(req, res, next){
  ProductInstance.getProductId(req, res);
});

router.put('/products/discount', function(req, res, next){
  ProductInstance.putAddProperty(req, res);
});

//put /products/:id
router.put('/products/:id', function(req, res, next){
  ProductInstance.putProduct(req, res);
});

router.get('/users', function(req, res, next) {
  UserInstance.getUser(req, res);
});

router.post('/users', function(req, res, next) {
  UserInstance.postUser(req, res);
});

router.get('/users/:id', function(req, res, next) {
  UserInstance.getUserId(req, res);
});

router.get('/users/:handler', function(req, res, next) {
  UserInstance.getUserHandler(req, res);
})


module.exports = router;
