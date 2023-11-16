const router = require('express').Router();

const userRoutes = require('./user-routes');
const notecardRoutes = require('./notecard-routes.js');
const deckRoutes = require('./deck-routes.js');

router.use('/users', userRoutes);
router.use('/notecard', notecardRoutes);
router.use('/deck', deckRoutes);


module.exports = router;
