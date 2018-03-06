const express = require('express');
const morgan = require('morgan');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');

//==========================================================//

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };

nunjucks.configure('views', {noCache: true});


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use('/', routes);



//==========================================================//

// app.get('/', (req, res) => {
//     res.render('index.html', locals);
// });


// app.get('/news', (req, res) => {
//     // console.log("req: ", req);
//     //console.log("res: ", res);

//     res.send("You reached the NEWS page! Congrats!");
// });


// app.get('/tweets/:id', (req, res) => {

//     console.log("====req.params: ", req.params.id)



//     res.render('index.html', locals);
// });

//==========================================================//





app.listen(3000, function () { 
    console.log("server is listening on port 3000: Welcome home!");
})