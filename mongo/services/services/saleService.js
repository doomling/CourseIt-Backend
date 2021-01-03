const Sale = require('../models/saleModel');

class SaleService{
  
  //get de sales
  getSale(page, limit){
    const query = Sale.find().skip(page).limit(limit).exec();
    return query;
  };

  
  //agregar los sales
  addSale(sale){
    const newSale = new Sale(sale);
    return newSale.save();
  }
  
  //get de sales por el id
  getSaleId(id){
    const query = Sale.findOne({_id: id}).exec();
    return query;
  };
  
  //get de sales por user
  getSaleUser(user){
    const query = Sale.findOne({user: user}).exec();
    return query;
  };
  
  //get de productos en orden mas vendido
  getTopProducts(){
    const query = Sale.aggregate([{$group: {_id: {product: '$product.name'},count: { $sum: 1 }} }]);
    const order = query.sort({ count: -1})
    return order;
  }

  //get de users ordenados por mas ventas hechas
  getTopUser(){
    const query = Sale.aggregate([{$group: {_id: {user: '$user'},count: { $sum: 1 }} }]);
    const order = query.sort({ count: -1})
    return order;
  }
  
};

module.exports = SaleService;