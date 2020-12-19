const mongoose = require('mongoose');

//Crear un modelo de usuario que tenga como requerida la propiedad 'name' de tipo String
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model('User', userSchema);