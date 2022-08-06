const { Sequelize, DataTypes } = require('sequelize');
const database = require('./db');
const Venda = require('./venda');
const Codigo = database.define('codigo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});


module.exports = Codigo;
