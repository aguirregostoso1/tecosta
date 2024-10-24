// routes/generoRoutes.js

const express = require('express');
const generoController = require('../controllers/generoController');
const router = express.Router();

// Rota para obter todos os gêneros
router.get('/', generoController.getAllGeneros);

// Rota para renderizar o formulário de criação
router.get('/new', generoController.renderCreateForm);

// Rota para criar um novo gênero
router.post('/', generoController.createGenero);

// Rota para obter um gênero pelo ID
router.get('/:id', generoController.getGeneroById);

// Rota para renderizar o formulário de edição
router.get('/:id/edit', generoController.renderEditForm);

// Rota para atualizar um gênero pelo ID
router.put('/:id', generoController.updateGenero);

// Rota para deletar um gênero pelo ID
router.delete('/:id', generoController.deleteGenero);

module.exports = router;
