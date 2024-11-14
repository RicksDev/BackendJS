const sequelize = require('../config/config');
const { DataTypes } = require('sequelize');

const Administradores = sequelize.define('administradores', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Administradores;