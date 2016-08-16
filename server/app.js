const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');

const dbConfig = require('./db/connect.js');
const initPassport = require('./passport/init');
const routes = require('./routes/index');

mongoose.connect(dbConfig.url);

app.use(cors());

app.use(expressSession({
  secret: 'mySecretKey',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

initPassport(passport);

app.use('/', routes());



app.listen(3000, () => {
  console.log('listening port 3000');
});
