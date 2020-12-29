const express = require('express');
const router = express.Router();
const multer = require('multer');

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

router.post('/user', upload.single('avatar'), function (req, res) {
  console.log(req.body, req.file);
  return res.json({
    error: false,
    file: req.file,
    body: req.body
  });
});

module.exports = router;
