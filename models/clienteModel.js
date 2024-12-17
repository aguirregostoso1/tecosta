const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING(50), allowNull: false },
    cpf: { type: DataTypes.CHAR(14), allowNull: false },
    datanasc: { type: DataTypes.DATE, allowNull: false },
    codgenero: { type: DataTypes.INTEGER, allowNull: false },
    rua: { type: DataTypes.STRING(50), allowNull: false },
    numero: { type: DataTypes.INTEGER, allowNull: false },
    bairro: { type: DataTypes.STRING(30), allowNull: false },
    cidade: { type: DataTypes.STRING(40), allowNull: false },
    genero: { type: DataTypes.STRING(15), allowNull: false },
    uf: { type: DataTypes.STRING(2), allowNull: false },
    cep: { type: DataTypes.CHAR(9), allowNull: false },
    codatend: { type: DataTypes.INTEGER, allowNull: false },
}, {
    tableName: 'clientes',
    timestamps: false,
});

module.exports = Cliente;
