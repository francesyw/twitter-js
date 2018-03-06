const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});



router.get('/users/:name', function (req, res) { 
    
    let nm = req.params.name;
    

    var content = tweetBank.find({ name: nm });
   // console.log("==== content: ", content)

    // res.render('index', { content: content });
    res.render( 'index', { tweets: content } );
  });




module.exports = router;