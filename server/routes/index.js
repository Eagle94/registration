const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');
const logoutController = require('../controllers/logoutController');
const dashboardController = require('../controllers/dashboardController');

const isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated()){
    return next();
  }
}

module.exports = function(){

	router.post('/login', loginController);

  router.post('/signup', registerController);

	router.get('/signout', logoutController);

	router.post('/dashboard', dashboardController);

	return router;
}
