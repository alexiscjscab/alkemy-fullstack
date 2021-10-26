const {Router} = require('express');

const methods = require('./methods');
const category = require('./category');

const router = Router();

// CRUD
router.use('/api', methods);

// Category
router.use('/category',category);


module.exports = router;