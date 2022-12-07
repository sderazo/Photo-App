const express = require('express');
const router = express.Router();
const db = require('../conf/database');

router.post("/create", function(req,res,next){
    console.log(req.body);
    res.json(req.json);
})

module.exports = router