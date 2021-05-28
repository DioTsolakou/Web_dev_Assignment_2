let fs = require('fs');
let favoritesSet = new Set();

function writeToFile()
{
    favBooks = {
        books: []
    };


    for (let book in this.favoritesSet)
    {
        favBooks.books.push({book});
    }

    let jsonFile = JSON.stringify(favBooks);
    fs.writeFile('../../favoriteBooks.json', jsonFile, (error) => {
        if (error) return console.log(error);
        console.log("File was saved.")
    });


    //localStorage.setItem('favoriteBooks', JSON.stringify(book));
}

function readFavorites()
{
    fs.readFile('favoriteBooks.json', 'utf-8', readFileCallback = (error, data) => {
        if (error) console.log(error);
        else
        {
            return JSON.parse(data);
        }
    })
}

module.exports = {favoritesSet, writeToFile, readFavorites};