// routes/profissionalRoutes.js

const express = require('express');
const profissionalController = require('../controllers/usuariosController');
const router = express.Router();

// Rota para obter todos os profissionais
router.get('/', profissionalController.getAllProfissionais);

// Rota para renderizar o formulário de criação
router.get('/new', profissionalController.renderCreateForm);

// Rota para criar um novo profissional
router.post('/', profissionalController.createProfissional);

// Rota para obter um profissional pelo ID
router.get('/:id', profissionalController.getProfissionalById);

// Rota para renderizar o formulário de edição
router.get('/:id/edit', profissionalController.renderEditForm);

// Rota para atualizar um profissional pelo ID
router.put('/:id', profissionalController.updateProfissional);

// Rota para deletar um profissional pelo ID
router.delete('/:id', profissionalController.deleteProfissional);

module.exports = router;
