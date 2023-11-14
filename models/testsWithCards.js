const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TestsWithCards extends Model {}

TestsWithCards.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    test_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tests',
          key: 'id',
          unique: false,
        },
    },
    notecard_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'notecards',
          key: 'id',
          unique: false,
        },
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'testsWithCards',
  }
);

module.exports = TestsWithCards;