const router = require('express').Router();

const userRoutes = require('./user-routes');
const notecardRoutes = require('./notecard-routes.js');

router.use('/users', userRoutes);
router.use('/notecard', notecardRoutes);


module.exports = router;
