const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('api_rest','root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;