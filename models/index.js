const Users = require('./user');
const Decks = require('./deck');
const Notecards = require('./notecard');

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

module.exports = { Users, Decks, Notecards };
