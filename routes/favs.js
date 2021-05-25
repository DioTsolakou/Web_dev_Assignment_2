const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/favs', (req, res, next) => {
  console.log("reached favorites page");
  alert("reached favorites page");
  res.render('favs', {title: 'Favorite Books'})
});

router.post('/favs', async = (req, res) => {

});

module.exports = router;
