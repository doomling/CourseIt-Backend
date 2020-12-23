const express = require('express');
const router = express.Router();
const ProductController = require('./../controllers/productController');
const ProductService = require('./../services/productService');

const ProductInstance = new ProductController(new ProductService());

//Queremos crear una API para el manejo de productos: [GET] /products - [GET] /products/:id - [POST] /products - [PUT] /products/:id
/* GET home page. */

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
  ProductInstance.getProduct(req, res);
});

router.put('/products/discount', function(req, res, next){
  ProductInstance.putAddProperty(req, res);
});

//put /products/:id
router.put('/products/:id', function(req, res, next){
  ProductInstance.putProduct(req, res);
});



module.exports = router;
