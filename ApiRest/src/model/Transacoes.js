const sequelize = require('../config/config');

const { DataTypes } = require('sequelize');

const Transacoes = sequelize.define ('transacoes', {
    idConta : {
        type: DataTypes.INTEGER,
        references : {
            model: 'contas',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoTransacao : {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    dataTransacao: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

module.exports = Transacoes;