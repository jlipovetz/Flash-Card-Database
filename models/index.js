const Users = require('./user');
const Decks = require('./deck');
const Notecards = require('./notecard');

Decks.hasMany(Notecards, {
  foreignKey: 'deck_id',
  onDelete: 'CASCADE',
});

Users.hasMany(Decks, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { Users, Decks, Notecards };
