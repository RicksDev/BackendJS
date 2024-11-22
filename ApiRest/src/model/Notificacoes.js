const sequelize = require('../config/config');

const  { DataTypes } = require('sequelize');

const Notificacoes = sequelize.define('notificacoes', {
    idCliente: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cliente',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    mensagem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNotificacao: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Notificacoes;