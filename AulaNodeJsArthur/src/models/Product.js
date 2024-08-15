const sequelize = require('../config/config');
const { DataTypes } = require('sequelize');

const Product = sequelize.define('product', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Product;