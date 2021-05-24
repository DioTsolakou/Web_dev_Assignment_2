const express = require('express');
const router = express.Router();
const helper = require('../public/javascripts/helpers')

router.get('/', async (req, res, next) => {
    try
    {
        //let query = document.getElementById('searchBar').value;
        const {query} = req.query;
        console.log(query);
        const works = await helper.getResults(query);
        document.getElementById('books_found').style.display = "block";
        console.log(works);
        return res.render('result', {title: 'Search a book', results: works, query: query});
    }
    catch (error)
    {
        return res.render('error', { title: 'Error occurred', errorMsg: error.message});
    }
});

module.exports = router;