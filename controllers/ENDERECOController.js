const db = require('../models');
const Endereco = db.endereco;

exports.getAllEnderecos = async (req, res) => {
    try {
        const enderecos = await Endereco.findAll();
        res.status(200).json(enderecos);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter endereços', error });
    }
};

exports.getEnderecoById = async (req, res) => {
    const { id } = req.params;
    try {
        const endereco = await Endereco.findByPk(id);
        if (!endereco) {
            return res.status(404).json({ message: 'Endereço não encontrado' });
        }
        res.status(200).json(endereco);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter endereço', error });
    }
};

exports.createEndereco = async (req, res) => {
    try {
        const endereco = await Endereco.create(req.body);
        res.status(201).json(endereco);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar endereço', error });
    }
};

exports.updateEndereco = async (req, res) => {
    const { id } = req.params;
    try {
        const endereco = await Endereco.findByPk(id);
        if (!endereco) {
            return res.status(404).json({ message: 'Endereço não encontrado' });
        }
        await endereco.update(req.body);
        res.status(200).json(endereco);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar endereço', error });
    }
};

exports.deleteEndereco = async (req, res) => {
    const { id } = req.params;
    try {
        const endereco = await Endereco.findByPk(id);
        if (!endereco) {
            return res.status(404).json({ message: 'Endereço não encontrado' });
        }
        await endereco.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar endereço', error });
    }
};
