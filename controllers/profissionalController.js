const db = require('../models');
const Profissional = db.profissional;

exports.getAllProfissionais = async (req, res) => {
    try {
        const profissionais = await Profissional.findAll();
        res.status(200).json(profissionais);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter profissionais', error });
    }
};

exports.getProfissionalById = async (req, res) => {
    const { id } = req.params;
    try {
        const profissional = await Profissional.findByPk(id);
        if (!profissional) {
            return res.status(404).json({ message: 'Profissional não encontrado' });
        }
        res.status(200).json(profissional);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter profissional', error });
    }
};

exports.createProfissional = async (req, res) => {
    try {
        const profissional = await Profissional.create(req.body);
        res.status(201).json(profissional);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar profissional', error });
    }
};

exports.updateProfissional = async (req, res) => {
    const { id } = req.params;
    try {
        const profissional = await Profissional.findByPk(id);
        if (!profissional) {
            return res.status(404).json({ message: 'Profissional não encontrado' });
        }
        await profissional.update(req.body);
        res.status(200).json(profissional);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar profissional', error });
    }
};

exports.deleteProfissional = async (req, res) => {
    const { id } = req.params;
    try {
        const profissional = await Profissional.findByPk(id);
        if (!profissional) {
            return res.status(404).json({ message: 'Profissional não encontrado' });
        }
        await profissional.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar profissional', error });
    }
};
