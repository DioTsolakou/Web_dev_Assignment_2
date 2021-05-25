const { query } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try
    {
        document.getElementById("books_found").style.display = "block";
        return res.render('index', {title: 'Search a book', script: 'helpers', results: works, query: query});
    }
    catch (error)
    {
        return res.render('error', {title: 'Error occurred', errorMsg: error.message});
    }
});

module.exports = router;