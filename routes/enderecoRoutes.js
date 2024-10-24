// routes/enderecoRoutes.js

const express = require('express');
const enderecoController = require('../controllers/enderecoController');
const router = express.Router();

// Rota para obter todos os endereços
router.get('/', enderecoController.getAllEnderecos);

// Rota para renderizar o formulário de criação
router.get('/new', enderecoController.renderCreateForm);

// Rota para criar um novo endereço
router.post('/', enderecoController.createEndereco);

// Rota para obter um endereço pelo ID
router.get('/:id', enderecoController.getEnderecoById);

// Rota para renderizar o formulário de edição
router.get('/:id/edit', enderecoController.renderEditForm);

// Rota para atualizar um endereço pelo ID
router.put('/:id', enderecoController.updateEndereco);

// Rota para deletar um endereço pelo ID
router.delete('/:id', enderecoController.deleteEndereco);

module.exports = router;
