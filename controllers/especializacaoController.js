const Especializacao = require('../models/especializacaoModel');

const especializacaoController = {
    createEspecializacao: async (req, res) => {
        try {
            const newEspecializacao = {
                descricao: req.body.descricao,
            };

            const especializacao = await Especializacao.create(newEspecializacao);
            res.status(201).json(especializacao);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getEspecializacaoById: async (req, res) => {
        try {
            const especializacaoId = req.params.id;
            const especializacao = await Especializacao.findByPk(especializacaoId);

            if (!especializacao) {
                return res.status(404).json({ message: 'Especialização não encontrada' });
            }

            res.status(200).json(especializacao);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllEspecializacoes: async (req, res) => {
        try {
            const especializacoes = await Especializacao.findAll();
            res.status(200).json(especializacoes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateEspecializacao: async (req, res) => {
        try {
            const especializacaoId = req.params.id;
            const updatedEspecializacao = {
                descricao: req.body.descricao,
            };

            const [updated] = await Especializacao.update(updatedEspecializacao, {
                where: { id: especializacaoId },
            });

            if (!updated) {
                return res.status(404).json({ message: 'Especialização não encontrada' });
            }

            const especializacao = await Especializacao.findByPk(especializacaoId);
            res.status(200).json(especializacao);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteEspecializacao: async (req, res) => {
        try {
            const especializacaoId = req.params.id;
            const deleted = await Especializacao.destroy({
                where: { id: especializacaoId },
            });

            if (!deleted) {
                return res.status(404).json({ message: 'Especialização não encontrada' });
            }

            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = especializacaoController;
