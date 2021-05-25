class book
{
    title;
    id;
    authors = new Set();
    releaseDate;
    isFavorite = true;

    constructor(title, id, authors, releaseDate, isFavorite)
    {
        this.title = title;
        this.id = id;
        this.authors = authors;
        this.releaseDate = releaseDate;
        this.isFavorite = isFavorite;
    }

    get title()
    {
        return this.title;
    }

    set title(value)
    {
        this.title = value;
    }

    get id()
    {
        return this.id;
    }

    set id(value)
    {
        this.id = value;
    }

    get authors() {
        return this.authors;
    }

    set authors(value) {
        this.authors = value;
    }

    get releaseDate() {
        return this.releaseDate;
    }

    set releaseDate(value) {
        this.releaseDate = value;
    }

    get isFavorite() {
        return this.isFavorite;
    }

    set isFavorite(value) {
        this.isFavorite = value;
    }
}