const express = require('express');
const router = express.Router();
const bookDB = require('./data/bookDB');

/* GET users listing. */
router.get('/favs', (req, res, next) => {
	bookDB.find({}, (err, favs) => {
		favs = favs.map((fav) => {
			return {
				title: fav.title,
				id: fav.id,
				author: fav.author,
				releaseDate: fav.releaseDate,
				review: fav.review
			}
		});


		/* favs.forEach((fav) => {
			title: fav.title;
			id: fav.id;
			author: fav.author;
			releaseDate: fav.releaseDate;
			review: fav.review;
		}) */
	
		//console.log(favs);
		res.render('favs', {title: 'Favourite Books', favs, script: 'favsHelpers'})
	});
});

router.post('/favs', async (req, res) => {
	let action = req.body.action;
	let workID = req.body.id;

	if (action == 'delete')
    {
        await bookDB.deleteOne({id: workID}, err => {
            if (err) res.send({errValue: "-1"});
            else 
			{
				/* await bookDB.count({}, (err, count) => {
					if (!err) let amount = count;
				}); */
				res.send({errValue: "0"});
			}
        })
    }
});

module.exports = router;
