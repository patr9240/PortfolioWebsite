var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*get about me page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/*get contact me page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

/*get projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/*get about page */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
module.exports = router;
