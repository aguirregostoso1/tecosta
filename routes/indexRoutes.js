var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/cadastro', function(req,res) {
  res.render('cadastro');
});

router.get('/horarios', function(req,res) {
res.render('horarios');
});


router.get('/calendario', function(req,res) {
res.render('calendario');
});


module.exports = router;
