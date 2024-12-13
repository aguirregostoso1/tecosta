const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();

router.get('/', produtoController.getAllProdutos);

router.get('/new', (req, res) => {
    res.send('Formulário de criação de produto');
});

router.post('/', produtoController.createProduto);

router.get('/:id', produtoController.getProdutoById);

router.get('/:id/edit', (req, res) => {
    res.send(`Formulário de edição para o produto com ID ${req.params.id}`);
});

router.put('/:id', produtoController.updateProduto);

router.delete('/:id', produtoController.deleteProduto);

module.exports = router;
