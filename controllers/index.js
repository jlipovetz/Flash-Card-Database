const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const deckRoutes = require("./deck");
const apiRoutes = require("./api");


router.use('/', homeRoutes);
router.use("/deck", deckRoutes);
router.use("/api", apiRoutes);

module.exports = router;
