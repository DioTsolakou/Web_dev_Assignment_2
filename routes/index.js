const express = require('express');
const bookDAO = require('./data/bookDAO');
const favList = require('./data/favoritesList');
const router = express.Router();
const url = 'https://reststop.randomhouse.com/resources/works/'

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {title: 'Search a book', script: 'helpers'})
});

router.post('/', async = (req, res) => {
    let workid = req.id;
    let action = req.action;

    if (action == 'add')
    {
        fetch(url + workid, {
            method: 'GET',
            headers:
            {
                'Accept': 'application/json'
            }
        })
        .then((res) => res.json())
        .then(data => {
            let work = data.work;
            let book = new bookDAO(`${work.titleweb}`, `${work.workid}`, `${work.author}`, `${work.onsaledate}`);

            let db = favList.readFavorites();
            let bookExists = false;
            for (let i in db)
            {
                let current = db[i];
                if (current.id == book.id)
                {
                    bookExists = true;
                }
            }

            if (!bookExists)
            {
                favList.add(book);
                favList.writeToFile();
            }
        });
    }
    if (action == 'delete')
    {

    }
});

module.exports = router;
