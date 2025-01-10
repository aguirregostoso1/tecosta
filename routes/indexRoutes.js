const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rota inicial
router.get('/', function (req, res, next) {
  res.render('index');
});

// Outras rotas
router.get('/cadastro', function (req, res) {
  res.render('cadastro');
});

router.get('/horarios', function (req, res) {
  res.render('horarios');
});

router.get('/calendario', function (req, res) {
  res.render('calendario');
});


module.exports = router;
