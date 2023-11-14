const router = require('express').Router();

const { Decks, Users, Notecards } = require('../../models');

// GET one deck
router.get('/:id', async (req, res) => {
  try {
    // get a Deck
    const dbDeckData = await Decks.findByPk(req.params.id, {
      include: [
        {
          model: Users,
          attributes: ['username'],
        },
        {
          model: Notecards,
          attributes: ['question', 'answer'],
        }
      ]
    });

    var deck;

    if (!dbDeckData)
      deck = { id: `No deck found with id ${req.params.id}` }
    else
      deck = dbDeckData.get({ plain: true });

    console.log(deck);

    res.render('deck-display', { deck, loggedIn: req.session.loggedIn });
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET one card
router.get('/:id', async (req, res) => {
  try {
    // get a Deck
    const dbDeckData = await Decks.findByPk(req.params.id, {
      include: [
        {
          model: Users,
          attributes: ['username'],
        },
        {
          model: Notecards,
          attributes: ['question', 'answer'],
        }
      ]
    });

    var deck;

    if (!dbDeckData)
      deck = { id: `No deck found with id ${req.params.id}` }
    else
      deck = dbDeckData.get({ plain: true });

    console.log(deck);

    res.render('deck-display', { deck, loggedIn: req.session.loggedIn });
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
