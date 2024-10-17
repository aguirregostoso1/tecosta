const db = require('../models');
const Atendimento = db.atendimento;

exports.getAllAtendimentos = async (req, res) => {
    try {
        const atendimentos = await Atendimento.findAll();
        res.status(200).json(atendimentos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter atendimentos', error });
    }
};

exports.getAtendimentoById = async (req, res) => {
    const { id } = req.params;
    try {
        const atendimento = await Atendimento.findByPk(id);
        if (!atendimento) {
            return res.status(404).json({ message: 'Atendimento não encontrado' });
        }
        res.status(200).json(atendimento);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter atendimento', error });
    }
};

exports.createAtendimento = async (req, res) => {
    try {
        const atendimento = await Atendimento.create(req.body);
        res.status(201).json(atendimento);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar atendimento', error });
    }
};

exports.updateAtendimento = async (req, res) => {
    const { id } = req.params;
    try {
        const atendimento = await Atendimento.findByPk(id);
        if (!atendimento) {
            return res.status(404).json({ message: 'Atendimento não encontrado' });
        }
        await atendimento.update(req.body);
        res.status(200).json(atendimento);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar atendimento', error });
    }
};

exports.deleteAtendimento = async (req, res) => {
    const { id } = req.params;
    try {
        const atendimento = await Atendimento.findByPk(id);
        if (!atendimento) {
            return res.status(404).json({ message: 'Atendimento não encontrado' });
        }
        await atendimento.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar atendimento', error });
    }
};
