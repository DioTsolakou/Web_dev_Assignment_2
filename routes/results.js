const express = require('express');
const helper = require('../public/javascripts/helpers')
const router = express.Router();

router.get('/', async (req, res, next) => {
    try
    {
        let query = document.getElementById('searchBar').innerHTML;
        console.log(query);
        //let {query} = req.query;
        let works = await helper.getResults(query);
        document.getElementById('books_found').style.display = "block";
        console.log(works);
        return res.render('result', {title: 'Search a book', results: works, query: query});
    }
    catch (error)
    {
        return res.render('error', { title: 'Search a book', errorMsg: error.message});
    }
});

module.exports = router;