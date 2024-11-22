const Atendimento = require('../models/atendimentoModel');

const atendimentoController = {
    createAtendimento: async (req, res) => {
        try {
            const newAtendimento = {
                dia: req.body.dia,
                hora: req.body.hora,
                motivo: req.body.motivo,
                procedimento: req.body.procedimento,
                vcobrado: req.body.vcobrado,
                formapag: req.body.formapag,
                codprof: req.body.codprof,
            };

            const atendimento = await Atendimento.create(newAtendimento);
            res.status(201).json(atendimento);
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
            const atendimentos = await Atendimento.findAll();
            res.status(200).json(atendimentos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    updateAtendimento: async (req, res) => {
        try {
            const atendimentoId = req.params.id;
            const updatedAtendimento = {
                dia: req.body.dia,
                hora: req.body.hora,
                motivo: req.body.motivo,
                procedimento: req.body.procedimento,
                vcobrado: req.body.vcobrado,
                formapag: req.body.formapag,
                codprof: req.body.codprof,
            };

            const [updated] = await Atendimento.update(updatedAtendimento, {
                where: { id: atendimentoId },
            });

            if (!updated) {
                return res.status(404).json({ message: 'Atendimento não encontrado' });
            }

            const atendimento = await Atendimento.findByPk(atendimentoId);
            res.status(200).json(atendimento);
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

    // Se você precisar das funções renderCreateForm e renderEditForm, adicione-as
    renderCreateForm: (req, res) => {
        res.render('createAtendimento'); // substitua pelo nome correto da view
    },

    renderEditForm: (req, res) => {
        const atendimentoId = req.params.id;
        Atendimento.findByPk(atendimentoId)
            .then(atendimento => {
                if (!atendimento) {
                    return res.status(404).json({ message: 'Atendimento não encontrado' });
                }
                res.render('editAtendimento', { atendimento }); // substitua pelo nome correto da view
            })
            .catch(err => {
                res.status(500).json({ error: err.message });
            });
    },
};

module.exports = atendimentoController;
