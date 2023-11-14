const router = require('express').Router();

const deckRoutes = require('./deck-routes');

router.use('/', deckRoutes);

module.exports = router;
