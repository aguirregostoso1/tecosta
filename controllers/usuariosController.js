const express = require('express');
const router = express.Router();
const usuarios = require('../models/usuariosModel'); // ajuste o caminho conforme necessário

// Rota para criar um novo usuário
router.post('/', (req, res) => {
    const newUser = {
        nome: req.body.nome,
        datanasc: req.body.datanasc,
        fone: req.body.fone,
        email: req.body.email,
    };

    usuarios.create(newUser, (err, insertId) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: insertId, ...newUser });
    });
});

// Rota para obter todos os usuários
router.get('/', (req, res) => {
    usuarios.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});

// Rota para obter um usuário pelo ID
router.get('/:id', (req, res) => {
    const userId = req.params.id;

    usuarios.findById(userId, (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json(user);
    });
});

// Rota para atualizar um usuário pelo ID
router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = {
        nome: req.body.nome,
        datanasc: req.body.datanasc,
        fone: req.body.fone,
        email: req.body.email,
    };

    usuarios.update(userId, updatedUser, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(200).json({ id: userId, ...updatedUser });
    });
});

// Rota para deletar um usuário pelo ID
router.delete('/:id', (req, res) => {
    const userId = req.params.id;

    usuarios.delete(userId, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        res.status(204).send();
    });
});

// Rota para buscar usuários pelo nome
router.get('/search', (req, res) => {
    const name = req.query.name;

    usuarios.searchByName(name, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
});

module.exports = router;
