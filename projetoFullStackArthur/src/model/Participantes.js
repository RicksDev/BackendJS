const sequelize = require('../config/config');
const { DataTypes } = require('sequelize');
const Evento = require('../model/Evento');

const Participantes = sequelize.define('participantes', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eventoId: {
        type: DataTypes.INTEGER,
        allowNull : false,
        onDelete : 'CASCADE',
        references: {
            model: Evento,
            key: "id",
        },
    },
});



module.exports = Participantes;