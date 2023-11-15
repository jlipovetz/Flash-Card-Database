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

  for (let i = 0; i < 20; i++) {
  let randomTests = [];
  function generateRandomTest() {
    let random = Math.floor(Math.random() * tests.length +1);
    if(!randomTests.includes(random)) {
        randomTests.push(random);
        return random;
    } else {
        if(randomTests.length < tests.length) {
         return  generateRandomTest();
        }
      }
  }

    for(let j = 0; j < 20; j++) {
    let randomQuestions = [];
    function generateRandomQuestions() {
      let randomQ = Math.floor(Math.random() * notecards.length + 1);
      if(!randomQuestions.includes(randomQ)) {
          randomQuestions.push(randomQ);
          return randomQ;
      } else {
          if(randomQuestions.length < 20) {
           return  generateRandomQuestions();
          }
        }
    }
    await TestsWithCards.create({
      test_id: generateRandomTest(),
      notecard_id: generateRandomQuestions(),
    }).catch((err) => {
      console.log(err);
    });
  };
} 




  process.exit(0);
};
seedAll();