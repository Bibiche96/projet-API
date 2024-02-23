const { Sequelize } = require('sequelize');

const bd = new Sequelize('my_database', 'kweshi', '12345', {
    host: 'localhost',
    dialect: 'postgres',
});



module.exports = bd