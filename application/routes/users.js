var express = require('express');
var router = express.Router();

//Method: POST
//localhost:3000/users/register
router.post("/register", function(req, res) {
  console.log(req.body);
  res.send();
});

//Method: POST
//localhost:3000/users/login
router.post("/login", function(req, res) {


});

module.exports = router;
