const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuariosModel');

const Atendimento = sequelize.define('Atendimento', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    dia: { type: DataTypes.DATE, allowNull: false },
    hora: { type: DataTypes.TIME, allowNull: false },
    motivo: { type: DataTypes.STRING(100), allowNull: false },
    procedimento: { type: DataTypes.STRING(100), allowNull: false },
    vcobrado: { type: DataTypes.FLOAT, allowNull: false },
    formapag: { type: DataTypes.STRING(30), allowNull: false },
    codprof: { 
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: { model: Usuario, key: 'id' },
    },
}, {
    tableName: 'atendimento',
    timestamps: false,
});

Atendimento.belongsTo(Usuario, { foreignKey: 'codprof' });

module.exports = Atendimento;
