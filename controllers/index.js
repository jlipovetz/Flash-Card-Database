const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const notecardRoutes = require('./notecard-routes.js');

router.use('/', homeRoutes);
router.use('/edit', notecardRoutes);

module.exports = router;
