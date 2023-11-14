const router = require('express').Router();

const { Decks, Users } = require('../models');

// GET all decks for homepage
router.get('/', async (req, res) => {
  try {
    // get all Decks
    const dbDeckData = await Decks.findAll();

    // format decks into something that can be displayed
    const decks = dbDeckData.map((deck) => deck.get({ plain: true }));

    console.log(decks)

    res.render('homepage.handlebars', { decks });
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET one deck
router.get('/deck/:id', async (req, res) => {
  try {
    // get a Deck
    const dbDeckData = await Decks.findByPk(req.params.id, {
      include: [
        {
          model: Users,
          attributes: ['first_name', 'last_name'],
        },
      ],
    });

    var deck;

    if (!dbDeckData)
      deck = { id: `No deck found with id ${req.params.id}` }
    else
      deck = dbDeckData.get({ plain: true });

    res.render('deck-display', { deck });
  }
  catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;

// router.post('/', async (req, res) => {
//   const bookData = await Book.create(req.body);

//   return res.json(bookData);
// });

// router.get('/paperbacks', async (req, res) => {
//   const bookData = await Book.findAll({
//     order: ['title'],
//     where: {
//       is_paperback: true,
//     },
//     attributes: {
//       exclude: ['is_paperback', 'edition'],
//     },
//   });

//   return res.json(bookData);
// });

// router.get('/:id', async (req, res) => {
//   const bookData = await Book.findByPk(req.params.id);

//   return res.json(bookData);
// });

// router.post('/', async (req, res) => {
//   const bookData = await Book.create(req.body);

//   return res.json(bookData);
// });

// router.put('/:book_id', async (req, res) => {
//   const bookData = await Book.update(
//     {
//       title: req.body.title,
//       author: req.body.author,
//       isbn: req.body.isbn,
//       pages: req.body.pages,
//       edition: req.body.edition,
//       is_paperback: req.body.is_paperback,
//     },
//     {
//       where: {
//         book_id: req.params.book_id,
//       },
//     }
//   );

//   return res.json(bookData);
// });

// router.delete('/:book_id', async (req, res) => {
//   const bookData = await Book.destroy({
//     where: {
//       book_id: req.params.book_id,
//     },
//   });

//   return res.json(bookData);
// });
