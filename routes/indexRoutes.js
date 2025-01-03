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

router.get('/clientes', async function (req, res) {
  try {
    const clientes = await clienteController.getAllClientesData(); 
    res.render('clientes', { usuarios: clientes }); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar clientes');
  }
});

module.exports = router;
