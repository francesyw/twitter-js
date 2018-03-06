const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function(req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets, showForm: true });
});

router.get('/users/:name', function(req, res) {
  let nm = req.params.name;
  var content = tweetBank.find({ name: nm });
  res.render('index', { tweets: content, showForm: true, userName: nm });
});

router.get('/tweets/:id', function(req, res) {
  let id = req.params.id;
  var content = tweetBank.find({ id: Number(id) });
  res.render('index', { tweets: content });
});

router.post('/tweets', urlencodedParser, function (req, res, next) {
  tweetBank.add(req.body.name, req.body.text);
  res.redirect('/');
})


module.exports = router;
