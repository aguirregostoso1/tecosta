var express = require('express');
const requireAuth = require('../middleware/requireAuth');
var router = express.Router();

router.get('/',function(req, res, next) {
  res.render('dashboard/index');
});

router.get('/agenda', function(req, res, next) {
  res.render('dashboard/agenda');
});

router.get('/cadastro', function(req, res, next) {
  res.render('dashboard/cadastro');
});

module.exports = router;