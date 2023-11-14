const { Decks, Notecards, Users } = require("../models");
const sequelize = require('../config/connection');
const seedDecks = require('./decksSeedData.json');
const seedNotecards = require('./notecardsSeedDate.json')
const usersSeeds = require("./usersSeedData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Users.bulkCreate(usersSeeds);
  await Decks.bulkCreate(seedDecks);
  await Notecards.bulkCreate(seedNotecards);

  process.exit(0);
};

seedAll();
