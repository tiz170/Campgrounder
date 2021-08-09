module.exports.isLoggedIn = (req, res, next) => {
    // console.log("REQ.USER...", req.user);
    if (!req.isAuthenticated()) {
        // store the url they are requesting!
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'you must be signed in');
        return res.redirect('/login');
    }
    next();
}