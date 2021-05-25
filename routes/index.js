const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) =>
  res.render('index', {title: 'Search a book', script: 'helpers'})
);

router.post('/', async = (req, res) => {

});

module.exports = router;
