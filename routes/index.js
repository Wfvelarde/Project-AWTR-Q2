var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Awtr' });
});

router.get('/page2', function(req, res, next) { //when you go to page2,
  res.render('page2'); //render page2
});


module.exports = router;
