const express = require(`express`);
const router = express.Router();
const pupps = require(`../models/pupps.js`);
// get routes -> index.handlebars
// router.get(`/`, function(req, res) {
//   res.render(`index`);
// });

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/profile', function(req, res) {
  res.render('profile');
});

router.get('/result', function(req, res) {
  res.render('result');
});

router.get('/scheduler', function(req, res) {
  res.render('scheduler');
});

router.get('/search', function(req, res) {
  res.render('search');
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.get('/thanks', function(req, res) {
  res.render('thanks');
});

module.exports = router;
