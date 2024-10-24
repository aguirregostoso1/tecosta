const Usar = require('../models/usarModel');

const usarController = {
    createUsar: async (req, res) => {
        try {
            const newUsar = {
                descricao: req.body.descricao,
                codatend: req.body.codatend,
                codproduto: req.body.codproduto,
            };

            const usar = await Usar.create(newUsar);
            res.status(201).json(usar);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getUsarById: async (req, res) => {
        try {
            const usarId = req.params.id;
            const usar = await Usar.findByPk(usarId);

            if (!usar) {
                return res.status(404).json({ message: 'Registro não encontrado' });
            }

            res.status(200).json(usar);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllUsar: async (req, res) => {
        try {
            const usarList = await Usar.findAll();
            res.status(200).json(usarList);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateUsar: async (req, res) => {
        try {
            const usarId = req.params.id;
            const updatedUsar = {
                descricao: req.body.descricao,
                codatend: req.body.codatend,
                codproduto: req.body.codproduto,
            };

            const [updated] = await Usar.update(updatedUsar, {
                where: { id: usarId },
            });

            if (!updated) {
                return res.status(404).json({ message: 'Registro não encontrado' });
            }

            const usar = await Usar.findByPk(usarId);
            res.status(200).json(usar);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteUsar: async (req, res) => {
        try {
            const usarId = req.params.id;
            const deleted = await Usar.destroy({
                where: { id: usarId },
            });

            if (!deleted) {
                return res.status(404).json({ message: 'Registro não encontrado' });
            }

            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = usarController;
