const express = require('express');
const router = express.Router();
const bookDB = require('./data/bookDB');

/* GET users listing. */
router.get('/favs', (req, res, next) => {
  res.render('favs', {title: 'Favorite Books', script: 'helpers'})
});

router.post('/favs', async = (req, res) => {

});

module.exports = router;
