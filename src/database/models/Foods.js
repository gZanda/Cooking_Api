const { DataTypes } = require('sequelize');
const db = require('../db');

const Foods = db.define('Foods', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Foods;
