const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bCrypt = require('bcrypt-nodejs');

module.exports = function(passport) {
	passport.use('signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	function(req, username, password, done){
		findOrCreateUser = function() {
			User.findOne({ 'email':  username }, function(err, user) {
				if (err) {
						return done(err);
				}
				if (user) {
						return done(null, false, { emailErr: 'Данный email уже используется.' });
				} else {
					User.findOne({ username:  req.body.name }, function(err, user) {
						if (err) {
								return done(err);
						}
						if (user) {
								return done(null, false, { nameErr: 'Данное имя уже занято.' });
						} else {
							const newUser = new User();
							newUser.email = username;
							newUser.password = createHash(password);
							newUser.username = req.body.name;

							newUser.save(function(err) {
                  if (err){
                      throw err;
                  }
                  return done(null, newUser);
              });
						}
					});
				}
			});
		}
		process.nextTick(findOrCreateUser);
	}));

	const createHash = function(password){
			return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	}
}
