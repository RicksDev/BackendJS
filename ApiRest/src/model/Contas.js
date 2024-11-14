const sequelize = require('../config/config');

const { DataTypes } = require('sequelize');

const Contas = sequelize.define('contas', {

    idCliente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cliente',
            key: id
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }

});

module.exports = Contas;