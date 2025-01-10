var express = require('express');
var router = express.Router();
var clienteController = require('../controllers/clienteController')

router.post('/cadastro', clienteController.createCliente)

router.get('/', clienteController.getAllClientes);

router.post('/editar/', clienteController.updateCliente);

router.get('/:id', clienteController.getClienteById);

router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
