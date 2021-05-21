const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('favs', {title: 'Favorite Books'})
});

module.exports = router;
