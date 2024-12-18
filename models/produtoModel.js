const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    vcompra: { type: DataTypes.FLOAT, allowNull: false },
    vvenda: { type: DataTypes.FLOAT, allowNull: false },
    refrig: { type: DataTypes.BOOLEAN, allowNull: false },
    descricao: { type: DataTypes.STRING(50), allowNull: false },
    nome: { type: DataTypes.STRING(30), allowNull: false },
    lote: { type: DataTypes.INTEGER, allowNull: false },
    datavali: { type: DataTypes.DATE, allowNull: false },
    marca: { type: DataTypes.STRING(30), allowNull: false },
    indicacao: { type: DataTypes.STRING(50), allowNull: false },
    restricoes: { type: DataTypes.STRING(100), allowNull: false },
    quantidade: { type: DataTypes.INTEGER, allowNull: false },
    observacoes: { type: DataTypes.STRING(150), allowNull: false },
    foto: { type: DataTypes.BLOB, allowNull: false },
}, {
    tableName: 'produtos',
    timestamps: false,
});

module.exports = Produto;
