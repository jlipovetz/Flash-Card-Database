const { Decks, NoteCards, Users } = require("../models");
const sequelize = require('../config/connection');
const seedDecks = require('./decksSeedData.json');
const seedNotecards = require('./notecardsSeedDate.json');
const usersSeeds = require("./usersSeedData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Decks.bulkCreate(seedDecks);
  await NoteCards.bulkCreate(seedNotecards);
  await Users.bulkCreate(usersSeeds);

  process.exit(0);
};

seedAll();
