const express = require('express');
const router = express.Router();
const db = require('../conf/database');

router.post("/create", function(req,res,next){
    if(!req.session.userId){
        res.json({
            status:"error",
            message:"You must be logged in"
        });
    }else{
        let {comment, postId} = req.body;
        let {userId, username} = req.session;
        db.execute(`INSERT INTO comments (text, fk_authorId, fk_postId) value (?,?,?);`)
    }
})

module.exports = router