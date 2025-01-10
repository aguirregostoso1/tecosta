const express = require('express');
const atendimentoController = require('../controllers/atendimentoController');
const router = express.Router();

router.get('/', atendimentoController.getAllAtendimentos);

router.post('/', atendimentoController.createAtendimento);

router.get('/:id', atendimentoController.getAtendimentoById);

router.post('/editar', atendimentoController.updateAtendimento);

router.delete('/:id', atendimentoController.deleteAtendimento);

router.post('/:id/atendido', atendimentoController.atendidos)

module.exports = router;
