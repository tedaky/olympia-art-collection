var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about/index', { title: 'About Olympia Art Collection'});
});

module.exports = router;
