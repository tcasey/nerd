var express = require('express'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  LocalStrategy = require('passport-local'),
  FacebookStrategy = require('passport-facebook'),
  StripeStrategy = require('passport-stripe'),
  profileCtrl = require('./controller/profileCtrl'),
  productCtrl = require('./controller/productCtrl'),
  transCtrl = require('./controller/transCtrl'),
  accountCtrl = require('./controller/accountCtrl'),
  Profile = require('./models/Profile.js'),
  Products = require('./models/Products.js'),
  Trans = require('./models/Trans.js'),
  Account = require('./models/Accounts.js'),
  keys = require('./keys');

var nodePort = 5000;
// Initiating express app
var app = express();
mongoUri = 'mongodb://localhost:27017/nerd';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Passport
app.use(session({
  secret: 'secret_stuff'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + './../client'));



// Facebook Passport Login
// passport.use(new FacebookStrategy({
//   clientID: keys.facebook_clientd,
//   clientSecret: keys.facebook_secret,
//   callbackURL: 'http://localhost:5000/auth/facebook/callback'
// }, function(token, refreshToken, profile, done) {
//   return done(null, profile);
// }));
//
// app.get('/auth/facebook', passport.authenticate('facebook'));
// app.get('/auth/facebook/callback', passport.authenticate('facebook', {
//   successRedirect: '/home',
//   failureRedirect: '/login'
// }));
//
// passport.serializeUser(function(dataToSerialize, done) {
//   done(null, dataToSerialize);
// });
//
// passport.deserializeUser(function(dataFromSessionToPutOnReqDotUser, done) {
//   done(null, dataFromSessionToPutOnReqDotUser);
// });
//
// app.get('/me', function(req, res) {
//   res.send(req.user);
// });

// LOGIN AUTH
passport.use('local-login', new LocalStrategy({
  usernameField: 'username'
},
  function(username, password, cb) {
    Profile.findOne({username: username}, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (!user.validatePassword(password)) { console.log('password wrong'); return cb(null, false); }
      return cb(null, user);
    });
  }));

  //SIGNUP AUTH
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, username, password, done) {
      Profile.findOne({'username': username}, function(err, user) {
          if (err) return done(err);
          if (user) return done(null, false);
          else {
              var newUser = new Profile(req.body);
              console.log(newUser);
              newUser.password = newUser.generateHash(req.body.password);
              newUser.save(function(err, response) {
                  if (err) return done(null, err);
                  else return done(null, response);
              });
          }
      });
  }));

  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) {
    Profile.findById(id, function (err, user) {
      if (err) { return cb(err); }
      cb(null, user);
    });
  });

//AUTH API
app.post('/login', passport.authenticate('local-login', { failureRedirect: '/login'}), function(req, res) {
  res.status(200).send({msg: 'okay!', user: req.session.passport});
});

// app.get('/logout', function( req, res ) {
// 	req.logout();
// 	req.session.destroy();
//     console.log('Logged Out!');
// 	res.redirect('/login');
// });

app.post('/signup', passport.authenticate('local-signup', { failureRedirect: '/login'}), function(req, res) {
    res.status(200).json(req.body);
});
// Account Endpoints
app.post('/accounts', accountCtrl.create);
// app.post('/accounts/:id', accountCtrl.createId);
app.get('/accounts', accountCtrl.index);
app.delete('/accounts/:id', accountCtrl.delete);
// Products Endpoints
app.post('/products', productCtrl.create);
app.get('/products', productCtrl.index);
app.get('/products/:id', productCtrl.show);
app.put('/products/:id', productCtrl.update);
app.delete('/products/:id', productCtrl.delete);

// Transactions Endpoints
app.post('/transactions', transCtrl.create);
app.get('/transactions', transCtrl.index);
app.get('/transactions/:id', transCtrl.show);
// app.put('/transactions/:id', transCtrl.update);
app.delete('/transactions/:id', transCtrl.delete);

// Profile Endpoints
app.post('/profile', profileCtrl.create);
app.get('/profile', profileCtrl.index);
app.get('/profile/:id', profileCtrl.show);

app.get('/logout', profileCtrl.loggedOut);
app.get('/user/current', profileCtrl.currentUser);
app.put('/profile', profileCtrl.update);
app.put('/profile/act', profileCtrl.updateAct);

// app.put('/profile/:id', profileCtrl.update);
app.delete('/profile/:id', profileCtrl.delete);

      // listening in on specified port
      app.listen(nodePort, function() {
        console.log('listening on port', nodePort);
      });

      // Connecting Mongoose
      mongoose.connect(mongoUri);
      mongoose.connection.once('open', function() {
            console.log('Connected to MongoD at ' + mongoUri);
});
