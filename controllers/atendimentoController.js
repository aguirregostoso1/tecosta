const Atendimento = require('../models/atendimentoModel');
const Cliente = require('../models/clienteModel');

const atendimentoController = {
    createAtendimento: async (req, res) => {
        try {
            const newAtendimento = {
                cliente: req.body.cliente,
                dia: req.body.dia,
                hora: req.body.hora,
                procedimento: req.body.procedimento,
                vcobrado: req.body.vcobrado,
                formapag: req.body.formapag,
                userId: req.session.userId,
            };

            const atendimento = await Atendimento.create(newAtendimento);
            res.redirect('/dashboard/agenda')
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    atendidos: async (req, res) => {
        try {
            const atendimentoId = req.params.id;

            // Busca o atendimento pelo ID
            const atendimento = await Atendimento.findByPk(atendimentoId);

            if (!atendimento) {
                return res.status(404).json({ message: 'Atendimento não encontrado' });
            }

            // Busca o cliente associado ao atendimento (baseado no nome do cliente)
            const cliente = await Cliente.findOne({
                where: { id: atendimento.cliente },
            });

            

            if (!cliente) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }

            // Incrementa a quantidade de sessões do cliente
            cliente.sessoes = (cliente.sessoes || 0) + 1;
            await cliente.save();
            console.log(cliente)

            // Exclui o atendimento
            await Atendimento.destroy({ where: { id: atendimentoId } });

            res.status(200).json({
                message: 'Atendimento marcado como atendido e sessão adicionada ao cliente',
                cliente: cliente.nome,
                sessoesAtualizadas: cliente.sessoes,
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAtendimentoById: async (req, res) => {
        try {
            const atendimentoId = req.params.id;
            const atendimento = await Atendimento.findByPk(atendimentoId);

            if (!atendimento) {
                return res.status(404).json({ message: 'Atendimento não encontrado' });
            }

            res.status(200).json(atendimento);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    getAllAtendimentos: async (req, res) => {
        try {
            const userId = req.session.userId; 
    
            if (!userId) {
                return res.status(401).json({ message: 'Usuário não autenticado' });
            }
    
            const atendimentos = await Atendimento.findAll({
                where: { userId },
            });
    
            res.status(200).json(atendimentos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateAtendimento: async (req, res) => {
        try {
            const atendimentoId = req.body.id;
            const updatedAtendimento = {
                dia: req.body.dia,
                hora: req.body.hora,
                procedimento: req.body.procedimento,
                vcobrado: req.body.vcobrado,
                formapag: req.body.formapag,
            };

            const [updated] = await Atendimento.update(updatedAtendimento, {
                where: { id: atendimentoId },
            });

            if (!updated) {
                return res.status(404).json({ message: 'Atendimento não encontrado' });
            }

            const atendimento = await Atendimento.findByPk(atendimentoId);
            res.redirect('/dashboard/agenda')
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteAtendimento: async (req, res) => {
        try {
            const atendimentoId = req.params.id;
            const deleted = await Atendimento.destroy({
                where: { id: atendimentoId },
            });

            if (!deleted) {
                return res.status(404).json({ message: 'Atendimento não encontrado' });
            }

            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};

module.exports = atendimentoController;
