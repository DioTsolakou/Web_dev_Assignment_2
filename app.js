const hbs = require('hbs');
const express = require('express');
const path = require('path');
const port = 8080;
const indexRouter = require('./routes/index');
const resultsRouter = require('./routes/results')
const favsRouter = require('./routes/favs');
const editRouter = require('./routes/edit');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/favicon.ico', express.static('images/favicon.ico'));

app.use('/', indexRouter);
app.use('/', resultsRouter);
app.use('/favs', favsRouter);
app.use('/edit', editRouter);

app.listen(port, () => console.log(`Listening to port : ${port}`));

module.exports = app;