const sequelize = require("../config/config");
const { DataTypes } = require("sequelize")


const User = sequelize.define('user',{
    //id vem implícito 
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }

});





module.exports = User;