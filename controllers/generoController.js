const Genero = require('../models/generoModel');

const generoController = {
    createGenero: async (req, res) => {
        try {
            const newGenero = {
                descricao: req.body.descricao,
            };

            const genero = await Genero.create(newGenero);
            res.status(201).json(genero);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getGeneroById: async (req, res) => {
        try {
            const generoId = req.params.id;
            const genero = await Genero.findByPk(generoId);

            if (!genero) {
                return res.status(404).json({ message: 'Gênero não encontrado' });
            }

            res.status(200).json(genero);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllGeneros: async (req, res) => {
        try {
            const generos = await Genero.findAll();
            res.status(200).json(generos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateGenero: async (req, res) => {
        try {
            const generoId = req.params.id;
            const updatedGenero = {
                descricao: req.body.descricao,
            };

            const [updated] = await Genero.update(updatedGenero, {
                where: { id: generoId },
            });

            if (!updated) {
                return res.status(404).json({ message: 'Gênero não encontrado' });
            }

            const genero = await Genero.findByPk(generoId);
            res.status(200).json(genero);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteGenero: async (req, res) => {
        try {
            const generoId = req.params.id;
            const deleted = await Genero.destroy({
                where: { id: generoId },
            });

            if (!deleted) {
                return res.status(404).json({ message: 'Gênero não encontrado' });
            }

            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = generoController;
