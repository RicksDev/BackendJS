const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('proj_full_stack', 'root', 'root', {
    host:'localhost',
    dialect:'mysql'
});

module.exports = sequelize;