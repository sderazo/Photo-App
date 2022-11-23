var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../conf/database');
//Method: POST
//localhost:3000/users/register
router.post("/register", function(req, res, next) {
  const {username, email, password} = req.body;

  //server side validation
  //check for duplicates
  db.query('select id from users where username=?', [username])
    .then(function([results, fields]){
      if(results && results.length == 0){
        return db.query('select id from users where email=?', [email])
      }else{
        throw new Error('username already exists');
      }
    }).then(function([results, fields]) {
      if(results && results.length == 0){
        return bcrypt.hash(password,2);
      }else{
        throw new Error('email already exists');
      }
    }).then(function(hashedPassword){
      return db.execute('insert into users (username, email, password) value (?,?,?)', [username, email, hashedPassword])
    })
    .then(function([results, fields]) {
      if(results && results.affectedRows == 1){
        res.redirect('/login');
      }else{
        throw new Error('user could not be made');
      }
    }).catch(function(err){
      res.redirect('/register');
      next(err);
    });
  //insert into db
  //respond



});

//Method: POST
//localhost:3000/users/login
router.post("/login", function(req, res, next) {
  const {username, password} = req.body;
  db.query('select id, username, email from users where username=? AND password=?', [username, password])
  .then(function([results, fields]){
    if(results && results.length == 1){
      res.redirect('/');
    }else{
      throw new Error('Invalid user credentials');
    }
  })
  .catch(function(err){
    next(err);
  })


});

module.exports = router;
