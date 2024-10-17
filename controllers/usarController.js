const db = require('../models');
const Usar = db.usar;

exports.getAllUsar = async (req, res) => {
    try {
        const usar = await Usar.findAll();
        res.status(200).json(usar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter registros', error });
    }
};

exports.getUsarById = async (req, res) => {
    const { id } = req.params;
    try {
        const usar = await Usar.findByPk(id);
        if (!usar) {
            return res.status(404).json({ message: 'Registro não encontrado' });
        }
        res.status(200).json(usar);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter registro', error });
    }
};

exports.createUsar = async (req, res) => {
    try {
        const usar = await Usar.create(req.body);
        res.status(201).json(usar);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar registro', error });
    }
};

exports.updateUsar = async (req, res) => {
    const { id } = req.params;
    try {
        const usar = await Usar.findByPk(id);
        if (!usar) {
            return res.status(404).json({ message: 'Registro não encontrado' });
        }
        await usar.update(req.body);
        res.status(200).json(usar);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar registro', error });
    }
};

exports.deleteUsar = async (req, res) => {
    const { id } = req.params;
    try {
        const usar = await Usar.findByPk(id);
        if (!usar) {
            return res.status(404).json({ message: 'Registro não encontrado' });
        }
        await usar.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar registro', error });
    }
};
