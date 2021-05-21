const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.render('edit', {title: 'Edit your favorite books'})
});

module.exports = router;