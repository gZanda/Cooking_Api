const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  database: 'sd_database',
  username: 'zanda',
  password: '123',
});

module.exports = sequelize;