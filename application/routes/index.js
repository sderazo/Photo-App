var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts, getPostById, getCommentsForPostById} = require('../middleware/posts');
var router = express.Router();

/* GET home page. */
router.get('/', getRecentPosts , function(req, res, next) {
  res.render('index', { js:["index.js"], title: 'CSC 317 App', name:"Sabrina Diaz-Erazo" });
});

router.get("/login", function(req, res) {
  res.render('login');
});

// turn off registration validation to work on milestone3
router.get("/register", function(req, res) {
  res.render('registration', { /*js:["registration.js"]*/});
});


router.get("/postimage", isLoggedIn, function(req, res) {
  res.render('postimage');
});


router.get("/posts/:id(\\d+)", getPostById, getCommentsForPostById, function(req, res) {
  res.render('viewpost', {js:["viewpost.js"]});
});

module.exports = router;
