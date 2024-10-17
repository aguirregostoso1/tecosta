const db = require('../models');
const Especializacao = db.especializacao;

exports.getAllEspecializacoes = async (req, res) => {
    try {
        const especializacoes = await Especializacao.findAll();
        res.status(200).json(especializacoes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter especializações', error });
    }
};

exports.getEspecializacaoById = async (req, res) => {
    const { id } = req.params;
    try {
        const especializacao = await Especializacao.findByPk(id);
        if (!especializacao) {
            return res.status(404).json({ message: 'Especialização não encontrada' });
        }
        res.status(200).json(especializacao);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter especialização', error });
    }
};

exports.createEspecializacao = async (req, res) => {
    try {
        const especializacao = await Especializacao.create(req.body);
        res.status(201).json(especializacao);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar especialização', error });
    }
};

exports.updateEspecializacao = async (req, res) => {
    const { id } = req.params;
    try {
        const especializacao = await Especializacao.findByPk(id);
        if (!especializacao) {
            return res.status(404).json({ message: 'Especialização não encontrada' });
        }
        await especializacao.update(req.body);
        res.status(200).json(especializacao);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar especialização', error });
    }
};

exports.deleteEspecializacao = async (req, res) => {
    const { id } = req.params;
    try {
        const especializacao = await Especializacao.findByPk(id);
        if (!especializacao) {
            return res.status(404).json({ message: 'Especialização não encontrada' });
        }
        await especializacao.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar especialização', error });
    }
};
