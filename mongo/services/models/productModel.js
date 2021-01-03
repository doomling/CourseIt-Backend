const mongoose = require('mongoose');

//Queremos crear una API para el manejo de productos: nombre, precio, descripcion, categoria, cantidad en stock y entrega gratis
//Agregar discount
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    stock: {
      type: Number,
      required: true
    },
    freeshipping: {
      type: Boolean,
      required: true
    },
    discount: {
      type: Number
    }
  }
);

module.exports = mongoose.model('Product', productSchema);