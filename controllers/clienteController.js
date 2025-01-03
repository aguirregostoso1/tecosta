const Cliente = require('../models/clienteModel');

const clienteController = {
    createCliente: async (req, res) => {
        try {
            const newCliente = {
                nome: req.body.nome,
                cpf: req.body.cpf,
                datanasc: req.body.datanasc,
                codgenero: req.body.codgenero,
                endereco: req.body.endereco,
                codatend: req.body.codatend,
            };

            const cliente = await Cliente.create(newCliente);
            res.status(201).json(cliente);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getClienteById: async (req, res) => {
        try {
            const clienteId = req.params.id;
            const cliente = await Cliente.findByPk(clienteId);

            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }

            res.status(200).json(cliente);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllClientes: async (req, res) => {
        try {
            const clientes = await Cliente.findAll();
            res.status(200).json(clientes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllClientesData: async () => {
        try {
            const clientes = await Cliente.findAll();
            return clientes.map(cliente => ({
                nome: cliente.nome,
                dadosPessoais: cliente.cpf,
                descricao: `Endereço: ${cliente.rua}, ${cliente.numero}, ${cliente.bairro}, ${cliente.cidade}, ${cliente.uf}, CEP: ${cliente.cep}`
            }));
        } catch (err) {
            throw new Error('Erro ao buscar clientes: ' + err.message);
        }
    },

    updateCliente: async (req, res) => {
        try {
            const clienteId = req.params.id;
            const updatedCliente = {
                nome: req.body.nome,
                cpf: req.body.cpf,
                datanasc: req.body.datanasc,
                codgenero: req.body.codgenero,
                endereco: req.body.endereco,
                codatend: req.body.codatend,
            };

            const [updated] = await Cliente.update(updatedCliente, {
                where: { id: clienteId },
            });

            if (!updated) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }

            const cliente = await Cliente.findByPk(clienteId);
            res.status(200).json(cliente);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteCliente: async (req, res) => {
        try {
            const clienteId = req.params.id;
            const deleted = await Cliente.destroy({
                where: { id: clienteId },
            });

            if (!deleted) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }

            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = clienteController;
