const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NoteCards extends Model {}

NoteCards.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'decks',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'notecards',
  }
);

module.exports = NoteCards;