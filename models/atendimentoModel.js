// models/atendimentoModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Caminho do arquivo de configuração do Sequelize

const Atendimento = sequelize.define('Atendimento', {
    dia: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false
    },
    motivo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    procedimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vcobrado: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    formapag: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codprof: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'atendimentos', // Nome da tabela no banco de dados
    timestamps: false, // Se você não estiver usando os campos createdAt/updatedAt
});

module.exports = Atendimento;
