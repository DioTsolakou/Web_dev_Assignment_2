class FavoritesList
{

    constructor(){
        favoritesSet = new Set();
    }

    /* constructor(favoritesList)
    {
        this.favoritesList = favoritesList;
    } */

    get favoritesList()
    {
        return this.favoritesSet;
    }

    set favoritesSet(value)
    {
        this.favoritesSet = value;
    }

    writeToFile()
    {
        for (let book in this.favoritesSet)
        {
            book = {
                "title" : book.title,
                "id" : book.id,
                "authors" : book.authors,
                "releaseDate" : book.releaseDate,
                "isFavorite" : book.isFavorite
            }

            localStorage.setItem('favoriteBooks', JSON.stringify(book));
        }
    }
}