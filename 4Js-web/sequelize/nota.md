#Conteudo do db.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize('banco-de-dados', 'usuario', 'senha',
              {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
