module.exports = {
    isLoggedIn : function(req, res, next){
        if(req.session.username){
            next();
        }else{
            res.redirect('/login');
        }
    }
}