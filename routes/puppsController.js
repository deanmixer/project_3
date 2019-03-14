const express = require(`express`);
const router = express.Router();
const pupps = require(`../models/pupps.js`);
<<<<<<< HEAD
const userProf = require("../models/user.js");
const jwt = require('jsonwebtoken');
// get routes -> index.handlebars
// router.get(`/`, function(req, res) {
//   res.render(`index`);
// });
=======
>>>>>>> master

let decoded;

function privateRoute(req, res, next) {
  let token;
  // let decoded;
  if (req.cookies.token) {
    token = req.cookies.token;
    decoded = jwt.verify(token, 'ilovepups');
  }
  if (decoded) {
      next();
  } else {
      res.redirect('/login');
  }
}

router.get('/set/:id', function(req, res) {
  const id = req.params.id;
  res.cookie('id-' + id, id, { maxAge: 6000000 }).json({
    message: "Cookie set!"
  });
  // res.render('index');
});

router.get('/', function(req, res) {
  userProf.all(function(data) {
    const hbsObject = {
      user: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/profile', privateRoute, function(req, res) {
  userProf.all(function(data) {
    console.log(decoded);
    const hbsObject = {
      email: decoded.email
      // email: (jwt.verify(req.cookies.token.email, 'ilovepups'))
    };
    console.log(hbsObject);
    res.render("profile", hbsObject);
  });
});

router.get('/result', function(req, res) {
  res.render('result');
});

router.get('/scheduler', function(req, res) {
  res.render('scheduler');
});

router.get('/search', function(req, res) {
  userProf.all(function(data) {
    const hbsObject = {
      user: data
    };
    console.log(hbsObject);
    res.render("search", hbsObject);
  });
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.get('/thanks', function(req, res) {
  res.render('thanks');
});

module.exports = router;
