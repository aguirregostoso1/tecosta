const db = require('../models');
const Cliente = db.cliente;

exports.getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter clientes', error });
    }
};

exports.getClienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter cliente', error });
    }
};

exports.createCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar cliente', error });
    }
};

exports.updateCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await cliente.update(req.body);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar cliente', error });
    }
};

exports.deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        await cliente.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar cliente', error });
    }
};
