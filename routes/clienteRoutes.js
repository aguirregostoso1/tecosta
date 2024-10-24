// routes/clienteRoutes.js

const express = require('express');
const clienteController = require('../controllers/clienteController');
const router = express.Router();

// Rota para obter todos os clientes
router.get('/', clienteController.getAllClientes);

// Rota para renderizar o formulário de criação
router.get('/new', clienteController.renderCreateForm);

// Rota para criar um novo cliente
router.post('/', clienteController.createCliente);

// Rota para obter um cliente pelo ID
router.get('/:id', clienteController.getClienteById);

// Rota para renderizar o formulário de edição
router.get('/:id/edit', clienteController.renderEditForm);

// Rota para atualizar um cliente pelo ID
router.put('/:id', clienteController.updateCliente);

// Rota para deletar um cliente pelo ID
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
