const router = require('express').Router();

const { Decks, Users } = require('../models');

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

    console.log(decks);

    res.render('homepage', { decks, loggedIn: req.session.loggedIn });
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

module.exports = router;
