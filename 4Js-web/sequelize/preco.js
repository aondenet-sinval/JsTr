const { Sequelize, DataTypes } = require('sequelize');
const database = require('./db');
const Venda = require('./venda');
const Preco = database.define('preco', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE(),
        allowNull: false
    }
});

module.exports = Preco;
