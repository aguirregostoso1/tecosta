// controllers/produtoController.js

const Produto = require('../models/produtoModel');

const produtoController = {
    createProduto: async (req, res) => {
        try {
            const newProduto = {
                vcompra: req.body.vcompra,
                vvenda: req.body.vvenda,
                refrig: req.body.refrig,
                descricao: req.body.descricao,
                nome: req.body.nome,
                lote: req.body.lote,
                datavali: req.body.datavali,
                marca: req.body.marca,
                indicacao: req.body.indicacao,
                restricoes: req.body.restricoes,
                quantidade: req.body.quantidade,
                observacoes: req.body.observacoes,
                foto: req.body.foto,
            };

            const produto = await Produto.create(newProduto);
            res.status(201).json(produto);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getProdutoById: async (req, res) => {
        try {
            const produtoId = req.params.id;
            const produto = await Produto.findByPk(produtoId);

            if (!produto) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            res.status(200).json(produto);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllProdutos: async (req, res) => {
        try {
            const produtos = await Produto.findAll();
            res.status(200).json(produtos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateProduto: async (req, res) => {
        try {
            const produtoId = req.params.id;
            const updatedProduto = {
                vcompra: req.body.vcompra,
                vvenda: req.body.vvenda,
                refrig: req.body.refrig,
                descricao: req.body.descricao,
                nome: req.body.nome,
                lote: req.body.lote,
                datavali: req.body.datavali,
                marca: req.body.marca,
                indicacao: req.body.indicacao,
                restricoes: req.body.restricoes,
                quantidade: req.body.quantidade,
                observacoes: req.body.observacoes,
                foto: req.body.foto,
            };

            const [updated] = await Produto.update(updatedProduto, {
                where: { id: produtoId },
            });

            if (!updated) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            const produto = await Produto.findByPk(produtoId);
            res.status(200).json(produto);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteProduto: async (req, res) => {
        try {
            const produtoId = req.params.id;

            const deleted = await Produto.destroy({
                where: { id: produtoId },
            });

            if (!deleted) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = produtoController;
