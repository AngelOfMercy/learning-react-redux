// set up dependencies
var express = require('express');
var router = express.Router();

// setup routing
router.get('/', function(req, res, next) {
  res.render('./pages/home', {})
})

router.get('/style', function(req, res, next) {
	res.render('./pages/style', {})
})

router.get('/about', function(req, res, next) {
	res.render('./pages/about', {})
})

router.get('/contact', function(req, res, next) {
	res.render('./pages/contact', {})
})

router.route("/projects").all(require('./projects/projects.js'))

router.get('*', function(req, res, next) {
	res.render('error', {
		error: 'Page not found'
	});
})

// export the module
module.exports = router;
