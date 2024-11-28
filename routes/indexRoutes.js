var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/cadastro', function(req,res) {
  res.render('cadastro');
});

module.exports = router;
