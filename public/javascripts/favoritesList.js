class FavoritesList
{
    favoritesList = new Set();
    constructor(favoritesList)
    {
        this.favoritesList = favoritesList;
    }

    get favoritesList()
    {
        return this.favoritesList;
    }

    set favoritesList(value)
    {
        this.favoritesList = value;
    }

    writeToFile()
    {
        for (let book in this.favoritesList)
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