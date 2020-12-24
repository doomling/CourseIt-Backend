const Product = require('./../models/productModel');

class ProductService {

  //get de los productos
  getProduct(){
    const query = Product.find();
    return query;
  };

  //agregar productos
  addProduct(product){
    const newProduct = new Product(product);
    return newProduct.save();
  };

  //mostrar producto por id
  getProductId(id){
    const query = Product.findOne({_id: id}).exec();
    return query;
  }

  //modificar productos según el id
  modifyProduct(id, product){
    const productModify = Product.findOneAndUpdate({_id: id}, product).exec();
    return productModify;
  };

  //filtrar productos con envío gratis
  filterProduct(){
    const query = Product.find({freeshipping: true}).exec();
    return query;
  };

  //filtrar productos que no tengan discount para agregarle la propiedad
  addProperty(product){
    const query = Product.updateMany({}, product);
    return query;
  };
}

module.exports = ProductService;