const sequelize = require('../config/config');
const { DataTypes } = require('sequelize');

const Cliente = sequelize.define ('clientes', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }

});

module.exports = Cliente;