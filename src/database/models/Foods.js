const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Foods = sequelize.define('Foods', {
  // Define your model fields here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  amount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  // Add more fields as needed
});

module.exports = Foods;
