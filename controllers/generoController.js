const db = require('../models');
const Genero = db.genero;

exports.getAllGeneros = async (req, res) => {
    try {
        const generos = await Genero.findAll();
        res.status(200).json(generos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter gêneros', error });
    }
};

exports.getGeneroById = async (req, res) => {
    const { id } = req.params;
    try {
        const genero = await Genero.findByPk(id);
        if (!genero) {
            return res.status(404).json({ message: 'Gênero não encontrado' });
        }
        res.status(200).json(genero);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter gênero', error });
    }
};

exports.createGenero = async (req, res) => {
    try {
        const genero = await Genero.create(req.body);
        res.status(201).json(genero);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar gênero', error });
    }
};

exports.updateGenero = async (req, res) => {
    const { id } = req.params;
    try {
        const genero = await Genero.findByPk(id);
        if (!genero) {
            return res.status(404).json({ message: 'Gênero não encontrado' });
        }
        await genero.update(req.body);
        res.status(200).json(genero);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar gênero', error });
    }
};

exports.deleteGenero = async (req, res) => {
    const { id } = req.params;
    try {
        const genero = await Genero.findByPk(id);
        if (!genero) {
            return res.status(404).json({ message: 'Gênero não encontrado' });
        }
        await genero.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar gênero', error });
    }
};
