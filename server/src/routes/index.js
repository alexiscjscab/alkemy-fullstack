const {Router} = require('express');

const methods= require('./methods');

const router = Router();

// CRUD
router.use('/', methods);


module.exports = router;