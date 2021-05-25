const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const port = 8080;
const indexRouter = require('./routes/index');
const resultsRouter = require('./routes/results')
const favsRouter = require('./routes/favs');
const editRouter = require('./routes/edit');
const app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs({defaultLayout : 'layout'}))
app.set('view engine', 'handlebars');

app.use(express.json());
//app.use(express.json({limit: '1mb'}, {type: ['application/json', 'text/plain']}))
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/favicon.ico', express.static('images/favicon.ico'));

app.use('/', indexRouter);
app.use('/', resultsRouter);
app.use('/', favsRouter);
app.use('/edit', editRouter);

app.listen(port, () => console.log(`Listening to port : ${port}`));

module.exports = app;