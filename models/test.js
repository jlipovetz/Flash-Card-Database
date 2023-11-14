const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tests extends Model {}

Tests.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'tests',
  }
);

module.exports = Tests;