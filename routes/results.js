const express = require('express');
const router = express.Router();
//const helper = require('../public/javascripts/helpers')

router.get('/', async (req, res, next) => {
    try
    {
        return res.render('index', {title: 'Search a book', script: 'helpers'});
    }
    catch (error)
    {
        return res.render('error', {title: 'Error occurred', errorMsg: error.message});
    }
});

module.exports = router;