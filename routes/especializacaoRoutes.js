// routes/especializacaoRoutes.js

const express = require('express');
const especializacaoController = require('../controllers/especializacaoController');
const router = express.Router();

// Rota para obter todas as especializações
router.get('/', especializacaoController.getAllEspecializacoes);

// Rota para renderizar o formulário de criação
router.get('/new', especializacaoController.renderCreateForm);

// Rota para criar uma nova especialização
router.post('/', especializacaoController.createEspecializacao);

// Rota para obter uma especialização pelo ID
router.get('/:id', especializacaoController.getEspecializacaoById);

// Rota para renderizar o formulário de edição
router.get('/:id/edit', especializacaoController.renderEditForm);

// Rota para atualizar uma especialização pelo ID
router.put('/:id', especializacaoController.updateEspecializacao);

// Rota para deletar uma especialização pelo ID
router.delete('/:id', especializacaoController.deleteEspecializacao);

module.exports = router;
