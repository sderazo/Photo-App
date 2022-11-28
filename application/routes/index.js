var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
//make it similar to login
const {isRegistered} = require('../middleware/protectors');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { js:["index.js"], title: 'CSC 317 App', name:"Sabrina Diaz-Erazo" });
});

router.get("/login", function(req, res) {
  res.render('login');
});

// turn off registration validation to work on milestone3
// added isRegistered
router.get("/register", isRegistered, function(req, res) {
  res.render('registration', { /*js:["registration.js"]*/});
});


router.get("/postimage", isLoggedIn, function(req, res) {
  res.render('postimage');
});

// what to write for viewpost for now
router.get("/posts/:id", function(req, res) {
  res.render('viewpost');
});

module.exports = router;
