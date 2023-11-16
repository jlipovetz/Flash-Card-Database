const Users = require('./user');
const Decks = require('./deck');
const Notecards = require('./notecard');
const Tests = require('./test')
const TestsWithCards = require('./testsWithCards')

Notecards.belongsTo(Decks, {
  foreignKey: 'deck_id'
});

Decks.belongsTo(Users, {
  foreignKey: "user_id"
});

Decks.hasMany(Notecards, {
  foreignKey: 'deck_id',
  onDelete: 'CASCADE',
});

Users.hasMany(Decks, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Notecards.belongsToMany(Tests, {
  through: {
    model: TestsWithCards,
    unique: false
  },
  as: "questions_test"
});

Tests.belongsToMany(Notecards, {
  through: {
    model: TestsWithCards,
    unique: false
  },
  as: "test_questions"
});


module.exports = { Users, Decks, Notecards, Tests, TestsWithCards };
