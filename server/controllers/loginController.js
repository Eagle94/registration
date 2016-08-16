const passport = require('passport');

module.exports = function(req, res, next) {
  passport.authenticate('login',
    function(err, user, info) {
      return err
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.status(200).json({name: user.username});
            })
          : res.status(401).json(info);
    }
  )(req, res, next);
};
