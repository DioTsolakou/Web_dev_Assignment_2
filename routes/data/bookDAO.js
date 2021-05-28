class book
{
    title;
    id;
    author;
    releaseDate;
    isFavorite;

    constructor(title, id, author, releaseDate)
    {
        this.title = title;
        this.id = id;
        this.author = author;
        this.releaseDate = releaseDate;
        this.isFavorite = true;
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