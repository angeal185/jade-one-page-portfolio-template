var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { 
	title: 'One page',
	footer: '2016 ben eaves',
	mail: 'admin@admin.com'
  });
});

module.exports = router;
