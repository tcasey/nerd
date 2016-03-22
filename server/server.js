var express = require('express'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  FacebookStrategy = require('passport-facebook'),
  StripeStrategy = require('passport-stripe'),
  profileCtrl = require('./controller/profileCtrl'),
  productCtrl = require('./controller/productCtrl'),
  transCtrl = require('./controller/transCtrl'),
  keys = require('./keys');


var nodePort = 5000;
// Initiating express app
var app = express();
mongoUri = 'mongodb://localhost:27017/nerd';




// mongoose.set('debug', true);
// mongoose.connect('mongodb://localhost/products');
// mongoose.connection.once('open', function() {
//   console.log('Connected to Mongo D at', mongoStuff);
// });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Passport
app.use(session({
  secret: 'secret_stuff'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '../index.html'));

// Facebook Passport Login
passport.use(new FacebookStrategy({
  clientID: keys.facebook_clientd,
  clientSecret: keys.facebook_secret,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/home',
  failureRedirect: '/login'
}));

passport.serializeUser(function(dataToSerialize, done) {
  done(null, dataToSerialize);
});

passport.deserializeUser(function(dataFromSessionToPutOnReqDotUser, done) {
  done(null, dataFromSessionToPutOnReqDotUser);
});

app.get('/me', function(req, res) {
  res.send(req.user);
});


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
app.put('/transactions/:id', transCtrl.update);
app.delete('/transactions/:id', transCtrl.delete);
// Profile Endpoints
app.post('/profile', profileCtrl.create);
app.get('/profile', profileCtrl.index);
app.get('/profile/:id', profileCtrl.show);
app.put('/profile/:id', profileCtrl.update);
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
