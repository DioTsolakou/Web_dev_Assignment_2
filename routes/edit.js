const express = require('express');
const router = express.Router();
const bookDB = require('./data/bookDB');

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.render('edit', {title: 'Edit your favourite books'})
});

module.exports = router;