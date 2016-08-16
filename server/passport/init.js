const login = require('./login');
const signup = require('./signup');
const User = require('../models/User');

module.exports = function(passport){

    passport.serializeUser(function(user, done) {
        console.log('serializing user: ');
        console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('deserializing user:',user);
            done(err, user);
        });
    });

    login(passport);
    signup(passport);
}
