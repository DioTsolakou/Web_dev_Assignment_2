const express = require('express');
const bookDB = require('./data/bookDB');
const router = express.Router();
const url = 'https://reststop.randomhouse.com/resources/works/'

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {title: 'Search a book', script: 'helpers'})
});

router.post('/', async (req, res) => {
    let workTitle = req.body.title;
    let workID = req.body.id;
    //console.log(req.body);
    let workAuthor = req.body.author;
    let workDate = req.body.releaseDate;
    let action = req.body.action;

    if (action == 'add')
    {
        let bookToAdd = new bookDB({
            title: workTitle,
            id: workID,
            author: workAuthor,
            releaseDate: workDate
        });
        await bookToAdd.save(err => {
            if (err) res.send({errValue: "-1"});
            else res.send({errValue: "0"});
        });
    }
    if (action == 'delete')
    {

    }
});

module.exports = router;
