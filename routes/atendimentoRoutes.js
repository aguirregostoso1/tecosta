const express = require('express');
const atendimentoController = require('../controllers/atendimentoController');
const router = express.Router();

router.get('/', atendimentoController.getAllAtendimentos);

router.get('/new', atendimentoController.renderCreateForm);

router.post('/', atendimentoController.createAtendimento);

router.get('/:id', atendimentoController.getAtendimentoById);

router.get('/:id/edit', atendimentoController.renderEditForm);

router.put('/:id', atendimentoController.updateAtendimento);

router.delete('/:id', atendimentoController.deleteAtendimento);

module.exports = router;
