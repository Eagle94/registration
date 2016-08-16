const passport = require('passport');
const User = require('../models/User');

module.exports = function(req, res, next) {
  passport.authenticate('signup',
    function(err, user, info) {
      if(user) {
        res.status(200).json({name: user.username});
      } else {
        res.status(401).json(info);
      }
    }
  )(req, res, next);
};
