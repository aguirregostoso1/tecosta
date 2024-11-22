const express = require('express');
const usuarioController = require('../controllers/usuariosController');
const router = express.Router();

// Rota para obter todos os usuários
router.get('/', usuarioController.getAll);

// Rota para renderizar o formulário de criação
router.get('/new', (req, res) => {
    res.send('Formulário de criação'); // Ajustar para um render real caso necessário.
});

// Rota para criar um novo usuário
router.post('/', usuarioController.create);

// Rota para obter um usuário pelo ID
router.get('/:id', usuarioController.getById);

// Rota para renderizar o formulário de edição
router.get('/:id/edit', (req, res) => {
    res.send(`Formulário de edição para o usuário com ID ${req.params.id}`);
});

// Rota para atualizar um usuário pelo ID
router.put('/:id', usuarioController.update);

// Rota para deletar um usuário pelo ID
router.delete('/:id', usuarioController.delete);

module.exports = router;
