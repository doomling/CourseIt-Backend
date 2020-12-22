const Product = require('./../models/serviceModel');

class ProductService {
  getProduct(){
    const query = Product.find();
    return query;
  }

  addProduct(product){
    const newProduct = new Product(product);
    return newProduct.save();
  }

  modifyProduct(id, product){
    const productModify = Product.findOneAndUpdate({_id: id}, product).exec();
    return productModify;
  }

  filterProduct(){
    const query = Product.findOne({freeshipping: true}).exec();
    return query;
  }

}

module.exports = ProductService;