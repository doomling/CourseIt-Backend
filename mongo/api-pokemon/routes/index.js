const express = require('express');
const router = express.Router();
const PokeController = require('./../controllers/pokeController');
const PokeService = require('./../services/pokeService');
const multer = require('multer');


const PokeInstance = new PokeController( new PokeService);

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, '/uploads');
  },
  filename: function(req, file, cb){
    cb(null, file.fieldname + '-' + Date.now() + '.png');
  }
});

const upload = multer({storage: storage});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Holi');
});

router.post('/pokemon', upload.single('pokemon'), function(req, res){
  PokeInstance.addPokemon(req, res);
})

/* router.post('/pokemon', function(req, res, next){
  PokeInstance.addPokemon(req, res);
}) */

router.get('/pokemon', function(req, res, next) {
  PokeInstance.getPokemon(req, res);
});
module.exports = router;
