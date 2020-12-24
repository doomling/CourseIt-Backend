const mongoose = require('mongoose');

//Queremos crear un nuevo modelo de datos (en el mismo proyecto) para manejar las ventas de productos: producto, usuario y fecha
const saleSchema = mongoose.Schema(
  {
    product: {
      type: Object,
      required: true,
      price: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      category: {
        type: String
      },
      description: {
        type: String
      },
      freeshipping: {
        type: Boolean
      },
      stock: {
        type: Number
      }
    },
    user: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  }
)

module.exports = mongoose.model('Sale', saleSchema);