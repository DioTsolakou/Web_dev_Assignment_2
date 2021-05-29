const mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "dio",
  password: "web_dev_2021"
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

let createTable = "CREATE TABLE books (title VARCHAR(255), id INT PRIMARY KEY, author VARCHAR(255), releaseDate VARCHAR(255))";
con.query(createTable, (err, result) => {
    if (err) throw err;
    console.log("Table books was created");
});

insertBook = (title, id, author, releaseDate) =>
{
    let insert = `INSERT INTO books (title, id, author, releaseDate) VALUES (${title}, ${id}, ${author}, ${releaseDate})`;
    con.query(insert, (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
    });
}

removeBook = (id) =>
{
    
}

module.exports = {};














/* class book
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
} */