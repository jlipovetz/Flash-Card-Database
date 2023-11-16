const router = require('express').Router();
const { Decks, Users, Notecards } = require('../models');

// GET all decks for homepage
router.get('/', async (req, res) => {
  try {
    // get all Decks
    const dbDeckData = await Decks.findAll({
      include: [
        {
          model: Users,
          attributes: ['username']
        }
      ]
    });

    // format decks into something that can be displayed
    const decks = dbDeckData.map((deck) => deck.get({ plain: true }));

    res.render('homepage', { decks, loggedIn: req.session.loggedIn });
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get("/notecard/:id", async (req, res) => {
  try {
    const dbData = await Notecards.findAll({
      include: [
        {
          model: Decks,
          attributes: [
            'id',
            'name'
          ],
        },
      ],
      where: {
        deck_id: req.params.id
      }
    });

    console.log(dbData.length);

    if (!dbData.length) {
      res.redirect("/");
      console.log("True");
    } else {
      console.log("False");
      const notecards = dbData.map((notecards) =>
        notecards.get({ plain: true })
      );

      res.render('deck-edit', { notecards });
    }



  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get("/deck-edit", async (req, res) => {
  try {
    const userDbData = await Users.findOne({
      where: {
        username: req.session.username
      }
    });

    const userId = userDbData.get({ plain: true }).id;

    const newDeckData = await Decks.create({
      name: "Sample Name",
      user_id: userId
    });

    const newDeckId = newDeckData.get({ plain: true }).id;

    const newNotecardData = await Notecards.create({
      question: "Sample question",
      answer: "Sample answer",
      deck_id: newDeckId
    });

    res.redirect(`/api/notecard/${newDeckId}`);
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login", { loggedIn: req.session.loggedIn });
});

router.get("/signup", (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn });
});

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

    if (!dbDeckData) {
      card = { name: `No deck found with id ${req.params.deckId}` }

      res.render('deck-display', { card, loggedIn: req.session.loggedIn });
    }
    else {
      card = dbDeckData.get({ plain: true });

      if (card.notecards.length && (req.params.cardId > card.notecards.length - 1)) {

        // reroute to first card
        res.redirect(`/${req.params.deckId}/0`);
      }
      else if (card.notecards.length && (req.params.cardId < 0)) {

        // reroute to last card
        res.redirect(`/${req.params.deckId}/${card.notecards.length - 1}`);
      }
      else {
        // construct a notecard's contents with queried info
        var sameUser = false;

        if (req.session.username === card.user.username)
          sameUser = true;

        card = {
          position: `${Number(req.params.cardId) + 1}/${card.notecards.length}`,
          name: card.name,
          question: card.notecards[req.params.cardId].question,
          answer: card.notecards[req.params.cardId].answer,
          username: card.user.username,
          isSameUser: sameUser
        }

        res.render('deck-display', { card, loggedIn: req.session.loggedIn });
      }
    }
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
