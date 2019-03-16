const express = require(`express`);
const router = express.Router();
const pupps = require(`../models/pupps.js`);
const userProf = require('../models/user.js');
const playDates = require('../models/PlayDate.js');
const jwt = require('jsonwebtoken');
// get routes -> index.handlebars
// router.get(`/`, function(req, res) {
//   res.render(`index`);
// });

let decoded;

function privateRoute(req, res, next) {
  let token;
  // let decoded;
  if (req.cookies.token) {
    // jwt.verify(token, 'ilovepups', function(err, decoded) {
    //   if (err) {
    //       res.redirect('/login');
    //   }
    // });
    token = req.cookies.token;
    decoded = jwt.verify(token, 'ilovepups');
  }
  // if (jwt.verify(req.cookies.token, 'ilovepups').email) {
  //   token = req.cookies.token;
  //   decoded = jwt.verify(token, 'ilovepups');
  // }
  if (decoded) {
    next();
  } else {
    res.redirect('/login');
  }
}

// router.get('/set/:id', function(req, res) {
//   const id = req.params.id;
//   res.cookie('id-' + id, id, {maxAge: 6000000}).json({
//     message: 'Cookie set!',
//   });
//   // res.render('index');
// });

router.get('/', function(req, res) {
  userProf.all(function(data) {
    console.log(req.cookies.token);
    const hbsObject = {
      user: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.get('/login', function(req, res) {
  userProf.all(function(data) {
    const hbsObject = {
      user: data,
    };
    console.log(hbsObject);
    res.render('login', hbsObject);
  });
});

router.get('/profile', privateRoute, function(req, res) {
  userProf.all(function(data) {
    console.log(decoded);
    const hbsObject = {
      email: decoded.email,
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      zipCode: decoded.zipCode,
      puppyName: decoded.puppyName,
      puppyBreed: decoded.puppyBreed,
      puppyPersonality: decoded.puppyPersonality,
      puppyAge: decoded.puppyAge,
      puppyWeight: decoded.puppyWeight,
      imgUrl: decoded.imgUrl,
      // email: (jwt.verify(req.cookies.token.email, 'ilovepups'))
    };
    console.log(hbsObject);
    res.render('profile', hbsObject);
  });
});

// router.get('/result', function(req, res) {
//   res.render('result');
// });

router.get('/scheduler', function(req, res) {
  playDates.all(function(data) {
    const hbsObject = {
      playDates: data,
    };
    console.log(hbsObject);
    res.render('scheduler', hbsObject);
  });
});

router.get('/search', function(req, res) {
  userProf.all(function(data) {
    const hbsObject = {
      user: data,
    };
    console.log(hbsObject);
    res.render('search', hbsObject);
  });
});

router.get('/signup', function(req, res) {
  userProf.all(function(data) {
    const hbsObject = {
      user: data,
    };
    console.log(hbsObject);
    res.render('signup', hbsObject);
  });
});

// router.get('/thanks', function(req, res) {
//   res.render('thanks');
// });

module.exports = router;
