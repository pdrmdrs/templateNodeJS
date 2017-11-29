const router = require('express').Router();

router.use('/', require('./home-controller'));

module.exports = router;