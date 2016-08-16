const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){
	passport.use('login', new LocalStrategy({
	  usernameField: 'email',
	  passwordField: 'password'
	}, function(username, password, done){
	  User.findOne({ email: username }, function(err,user) {
	    return err
	      ? done(err)
	      : user
	        ? isValidPassword(user, password)
	          ? done(null, user)
	          : done(null, false, { passErr: 'Неправильный пароль.' })
	        : done(null, false, { emailErr: 'Неправильный email.' });
	  });
	}));
	const isValidPassword = function(user, password){
		return bCrypt.compareSync(password, user.password);
	}
}
