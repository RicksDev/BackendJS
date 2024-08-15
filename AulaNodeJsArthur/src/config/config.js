const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('lojalibbs','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;