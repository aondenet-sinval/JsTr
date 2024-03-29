const { Sequelize, DataTypes } = require('sequelize');
const database = require('./db');
const Preco = require('./preco');

const Venda = database.define('venda', {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo: {
        type: Sequelize.INTEGER(6),
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: Sequelize.STRING,
    preco_un: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    qtde: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }

});

module.exports = Venda;
