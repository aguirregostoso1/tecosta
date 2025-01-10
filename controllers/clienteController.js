const Cliente = require('../models/clienteModel');

const clienteController = {
    createCliente: async (req, res) => {
        try {
            console.log(req.body);
            const genero = req.body.genero;
            const newCliente = {
                nome: req.body.nome,
                cpf: req.body.cpf,
                genero,
                datanasc: req.body.datanasc,
                cidade: req.body.cidade,
                estado: req.body.estado,
                bairro: req.body.bairro,
                rua: req.body.rua,
                numero: parseInt(req.body.numero, 10),
                cep: req.body.cep,
                telefone: req.body.telefone,
                userId: req.session.userId
            };

            console.log(newCliente)
    
            const cliente = await Cliente.create(newCliente);
            res.redirect('/dashboard/cadastro')
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
            const userId = req.session.userId; 
    
            if (!userId) {
                return res.status(401).json({ message: 'Usuário não autenticado' });
            }
    
            const clientes = await Cliente.findAll({
                where: { userId },
            });
    
            res.status(200).json(clientes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateCliente: async (req, res) => {
        try {
            const clienteId = req.body.id;
            const updatedCliente = {
                nome: req.body.nome,
                cpf: req.body.cpf,
                genero: req.body.genero,
                datanasc: req.body.datanasc,
                cidade: req.body.cidade,
                estado: req.body.estado,
                bairro: req.body.bairro,
                rua: req.body.rua,
                numero: parseInt(req.body.numero, 10),
                cep: req.body.cep,
                telefone: req.body.telefone,
            };

            const [updated] = await Cliente.update(updatedCliente, {
                where: { id: clienteId },
            });

            if (!updated) {
                res.status(404).json({ message: 'Cliente não encontrado' });
                res.redirect('/dashboard/cadastro');
                return;
            }

            const cliente = await Cliente.findByPk(clienteId);
            res.redirect('/dashboard/cadastro')
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
