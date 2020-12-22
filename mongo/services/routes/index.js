const express = require('express');
const router = express.Router();
const ProductController = require('./../controllers/productController');
const ProductService = require('./../services/productService');

const ProductInstance = new ProductController(new ProductService());

//Queremos crear una API para el manejo de productos: [GET] /products - [GET] /products/:id - [POST] /products - [PUT] /products/:id
/* GET home page. */
router.get('/products', function(req, res, next) {
  ProductInstance.getProduct(req, res);
});

router.post('/products', function(req, res, next) {
  ProductInstance.postProduct(req, res);
});

router.get('/products/freeshipping', function(req, res, next) {
  ProductInstance.getProductFilter(req, res)
})

router.get('/products/:id', function(req, res, next){
  ProductInstance.getProduct(req, res);
});

router.put('/products/:id', function(req, res, next){
  ProductInstance.putProduct(req, res);
})

module.exports = router;
