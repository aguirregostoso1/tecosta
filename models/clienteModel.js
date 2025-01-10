const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING(50), allowNull: false },
    cpf: { type: DataTypes.STRING(30), allowNull: false },
    datanasc: { type: DataTypes.DATE, allowNull: false },
    rua: { type: DataTypes.STRING(50), allowNull: false },
    numero: { type: DataTypes.INTEGER, allowNull: false },
    bairro: { type: DataTypes.STRING(30), allowNull: false },
    cidade: { type: DataTypes.STRING(40), allowNull: false },
    estado: { type: DataTypes.STRING(255), allowNull: false },
    cep: { type: DataTypes.STRING(33), allowNull: false },
    genero: { type: DataTypes.STRING(40), allowNull: false },
    telefone: { type: DataTypes.STRING(33), allowNull: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    sessoes: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
}, {
    tableName: 'clientes',
    timestamps: false,
});


module.exports = Cliente;
