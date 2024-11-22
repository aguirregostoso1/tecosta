const express = require('express');
const atendimentoController = require('../controllers/atendimentoController');
const router = express.Router();

// Rota para obter todos os atendimentos
router.get('/', atendimentoController.getAllAtendimentos);

// Rota para renderizar o formulário de criação
router.get('/new', atendimentoController.renderCreateForm);

// Rota para criar um novo atendimento
router.post('/', atendimentoController.createAtendimento);

// Rota para obter um atendimento pelo ID
router.get('/:id', atendimentoController.getAtendimentoById);

// Rota para renderizar o formulário de edição
router.get('/:id/edit', atendimentoController.renderEditForm);

// Rota para atualizar um atendimento pelo ID
router.put('/:id', atendimentoController.updateAtendimento);

// Rota para deletar um atendimento pelo ID
router.delete('/:id', atendimentoController.deleteAtendimento);

module.exports = router;
