const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

//Definindo o modelo
const User = sequelize.define('User', {
    nome: {
        type:DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true //E-mail único
    }
}, {
    timestamps:true // TimeStamps, para armazenar a hora
});

module.exports = User;