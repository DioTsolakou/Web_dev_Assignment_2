const express = require('express');
const router = express.Router();
const bookDB = require('./data/bookDB');

router.get('/edit/:id', (req, res) => {
    //console.log(req);
    bookDB.findOne({id: req.params.id}).lean()
        .exec((err, work) => {
            if (!err) {
                //console.log(work);
                res.render('edit', {title: 'Edit your favourite books', work, script: 'editHelpers'})
            }
            else res.render('error', {error: 'An error occured while trying to get your selected book!'});
        });
});

router.put('/edit/:id', async (req, res) => {
    let newTitle = req.body.updatedWork.title;
    let id = req.body.updatedWork.id;
    let newAuthor = req.body.updatedWork.author;
    let newReview = req.body.updatedWork.review;

    await bookDB.updateOne({id: id}, 
        {
            title: newTitle,
            author: newAuthor,
            review: newReview
        },
        err => {
            if (err) res.send({errValue: "-1"});
            else res.send({errValue: "0"});
        });
});

module.exports = router;