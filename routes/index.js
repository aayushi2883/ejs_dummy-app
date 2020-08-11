var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aayushi', greeting: 'to the brand new Express Server' });
});

module.exports = router;
