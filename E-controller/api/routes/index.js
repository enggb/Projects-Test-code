const express = require('express');
const router = express.Router();

//Used when run under localhost
//router.use('/EC/docs', require('./docs'));
router.use('/EC', require('./src'));

module.exports = router;
