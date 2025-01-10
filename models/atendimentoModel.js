const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuariosModel');

const Atendimento = sequelize.define('Atendimento', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    dia: { type: DataTypes.DATE, allowNull: false },
    hora: { type: DataTypes.TIME, allowNull: false },
    procedimento: { type: DataTypes.STRING(100), allowNull: false },
    vcobrado: { type: DataTypes.FLOAT, allowNull: false },
    formapag: { type: DataTypes.STRING(30), allowNull: false },
    userId: {type: DataTypes.INTEGER, allowNull: false},
    cliente: {type: DataTypes.STRING(255)}
}, {
    tableName: 'atendimento',
    timestamps: false,
});


module.exports = Atendimento;
