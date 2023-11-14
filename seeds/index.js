const { Decks, Notecards, Users, Tests, TestsWithCards } = require("../models");
const sequelize = require('../config/connection');
const seedDecks = require('./decksSeedData.json');
const seedNotecards = require('./notecardsSeedDate.json')
const usersSeeds = require("./usersSeedData.json");
const testsSeeds = require('./testsSeedData.json')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Users.bulkCreate(usersSeeds);
  await Decks.bulkCreate(seedDecks);
  const notecards = await Notecards.bulkCreate(seedNotecards);
  const tests = await Tests.bulkCreate(testsSeeds);

  for (let i = 0; i < 10; i++) {
    
    const { id: randomNotecardId } = notecards[
      Math.floor(Math.random() * notecards.length)
    ];

    const { id: randomTestId } = tests[
      Math.floor(Math.random() * tests.length)
    ];
   
    await TestsWithCards.create({
      notecard_id: randomNotecardId,
      test_id: randomTestId,
    }).catch((err) => {
      console.log(err);
    });
  }



  process.exit(0);
};

seedAll();
