const router = require('express').Router();
const { Decks, Users, Notecards } = require('../../models');
const { setDeckLength } = require("../../public/js/deck-length");

// GET one card
router.get('/:deckId/:cardId', async (req, res) => {
  try {
    // get a Deck
    const dbDeckData = await Decks.findByPk(req.params.deckId, {
      include: [
        {
          model: Users,
          attributes: ['username']
        },
        {
          model: Notecards,
          attributes: ["id", 'question', 'answer'],
        }
      ]
    });

    var card;

    if (!dbDeckData)
      card = { name: `No deck found with id ${req.params.deckId}` }
    else {
      card = dbDeckData.get({ plain: true });

      setDeckLength(card.notecards.length);

      // construct a notecard's contents with queried info
      card = {
        position: `${Number(req.params.cardId) + 1}/${card.notecards.length}`,
        name: card.name,
        question: card.notecards[req.params.cardId].question,
        answer: card.notecards[req.params.cardId].answer,
        username: card.user.username
      }
    }

    res.render('deck-display', { card, loggedIn: req.session.loggedIn });
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
