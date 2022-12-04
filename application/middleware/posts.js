const db = require('../conf/database');
module.exports = {
    getRecentPosts: function(req,res,next){
        db.query('select id, title, description, thumbnail from posts ORDER BY createdAt DESC LIMIT 8')
        .then(function([results, fields]){
            if(results && results.length){
                res.locals.results = results;
            }
            next();
        })
        .catch(err => next(err));
    }
}
