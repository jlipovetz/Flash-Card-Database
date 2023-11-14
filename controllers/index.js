const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const deckRoutes = require("./deck");
const apiRoutes = require("./api");
const notecardRoutes = require('./notecard-routes.js');

router.use('/', homeRoutes);
router.use("/deck", deckRoutes);
router.use("/api", apiRoutes);
router.use('/edit', notecardRoutes);

module.exports = router;
