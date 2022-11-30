module.exports = {
    isLoggedIn : function(req, res, next){
        if(req.session.username){
            next();
        }else{
            req.flash("error", "You must be logged in to post");
            req.session.save(function(saveError){
                res.redirect('/login');
            });
            
        }
    },

    
    isRegistered : function(req, res, next){
        if(req.session.username){
            next();
        }else{
            // error with message showing up a bunch of times
            req.flash("error", "You must be registered to login");
            req.session.save(function(saveError){
                res.redirect('/login');
            });

        }
    } 
}