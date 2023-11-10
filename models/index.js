const Decks = require('./deck');
const NoteCards = require("./notecard");
const Users = require("./user");

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = { Decks, NoteCards, Users };
