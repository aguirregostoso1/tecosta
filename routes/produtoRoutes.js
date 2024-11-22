const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();

// Rota para obter todos os produtos
router.get('/', produtoController.getAllProdutos);

// Rota para renderizar o formulário de criação
router.get('/new', (req, res) => {
    res.send('Formulário de criação de produto'); // Ajuste para um render real caso necessário.
});

// Rota para criar um novo produto
router.post('/', produtoController.createProduto);

// Rota para obter um produto pelo ID
router.get('/:id', produtoController.getProdutoById);

// Rota para renderizar o formulário de edição
router.get('/:id/edit', (req, res) => {
    res.send(`Formulário de edição para o produto com ID ${req.params.id}`);
});

// Rota para atualizar um produto pelo ID
router.put('/:id', produtoController.updateProduto);

// Rota para deletar um produto pelo ID
router.delete('/:id', produtoController.deleteProduto);

module.exports = router;
