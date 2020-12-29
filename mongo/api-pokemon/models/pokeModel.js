const mongoose = require('mongoose');

const pokeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Pokemon', pokeSchema);