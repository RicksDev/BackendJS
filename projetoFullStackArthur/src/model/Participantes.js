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
        references: {
            model: Evento,
            key: id,
        },
    },
});

Evento.belongsToMany(Evento, { through: Participantes });

module.exports = Participantes;