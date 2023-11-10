const router = require('express').Router();

const { Decks } = require('../models');

// GET all decks for homepage
router.get('/', async (req, res) => {
  try {

    // get all Decks

    const dbDeckData = await Decks.findAll({
      include: [
        {
          attributes: ['id', 'name', 'user_id'],
        },
      ],
    });

    // format decks into something that can be displayed

    const decks = dbDeckData.map((deck) =>
      deck.get({ plain: true })
    );

    // uncomment this once we have a Deck list to GET

    res.render('homepage', { decks });

    // comment this out once we have a Deck list to GET
    // res.render('homepage');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one deck
router.get('/deck/:id', async (req, res) => {
  try {

    // get a Deck

    const dbDeckData = await Deck.findByPk(req.params.id, {
      include: [
        {
          model: Painting, // (join whatever models you need - Card, perhaps?)
          attributes: ['whatever', 'columns', 'we', 'need'],
        },
      ],
    });

    const deck = dbDeckData.get({ plain: true });

    // uncomment this once we have a Deck to GET
    res.render('deck-display', { deck });

    // comment this out once we have a Deck to GET
    res.render('deck-display');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
