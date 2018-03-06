const express = require('express');
const morgan = require('morgan');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');


nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use('/', routes);
app.use(express.static('public'));


app.listen(3000, function () {
    console.log("server is listening on port 3000: Welcome home!");
})
