var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/clientes', function(req,res) {
  res.render('clientes');
});

module.exports = router;

