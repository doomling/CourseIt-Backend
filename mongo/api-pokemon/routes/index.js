const express = require('express');
const router = express.Router();
const PokeController = require('./../controllers/pokeController');
const PokeService = require('./../services/pokeService');
const multer = require('multer');

//Un método post que nos permita crear un pokemon, para eso le vamos a enviar solamente el nombre y una imagen a través de un formulario (front)
//Un método GET que nos permita ver toda la lista de pokemones cargados con sus datos y nos permita paginar los resultados en hasta 10 pokemones por request
//Un método PUT que nos permita guardar editar un pokemon por nombre o id (id de pokemon, no object id) para agregarle los siguientes campos traidos de la poke api: id, height, weight y type
//Un método DELETE que reciba como parámetro un nombre o id y en vez de borrar la entrada le agregue un campo que se llame disabled con el valor true

const PokeInstance = new PokeController(new PokeService());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.png');
  }
});

const upload = multer({storage: storage});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Holi');
});

//post pokemon
router.post('/upload', upload.single('image'), function(req, res){
  console.log(req.file, req.body);
  PokeInstance.addPokemon(req, res);
})

//get pokemon
router.get('/pokemon', function(req, res, next) {
  PokeInstance.getPokemon(req, res);
});

//put pokemon
router.put('/edit/:name', function(req, res, next) {
  PokeInstance.putPokemon(req, res)
});

//'delete' pokemon
router.delete('/delete/:name', function(req, res, next) {
  PokeInstance.deletePokemon(req, res);
});

module.exports = router;

