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
    notecard_id1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'notecards',
          key: 'id',
          unique: false,
        },
  },
  notecard_id2: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'notecards',
      key: 'id',
      unique: false,
    },
},
notecard_id3: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id4: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id5: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id6: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id7: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id8: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id9: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id10: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id11: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id12: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id13: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id14: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id15: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id16: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id17: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id18: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id19: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'notecards',
    key: 'id',
    unique: false,
  },
},
notecard_id20: {
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