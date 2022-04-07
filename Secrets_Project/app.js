// const bp = require("body-parser");
// const express = require("express");
// const app = express();
// const json =require('json');

// app.use(bp.urlencoded({ extended: true }));

// app.set('view engine', 'ejs');

// app.set('views', __dirname + '/views');
// app.engine('ejs', require('ejs').renderFile);
//     app.use(express.static(__dirname + '/public'));
 
// const mongoose = require('mongoose');

//  mongoose.connect('mongodb://localhost:27017/user');
//  const userSchema = new mongoose.Schema({
//     name: String,
//     password:String
   
//   });
//   const userdata = mongoose.model('userdata',userSchema);
// app.get('/',function(req,res){
//     res.render("home.ejs");
// });
// app.get('/register',function(req,res){
//     res.render("register.ejs");
// });
// app.get('/login',function(req,res){
//     res.render("login.ejs");
// });
// app.get('/secrets',function(req,res){
    
// });
// app.get('/logout',function(req,res){
//     res.render("logout.ejs");
// });
// app.get('/submit',function(req,res){
//     res.render("submit.ejs");
// });
// app.post('/register',function(req,res){

//   const newUser = new userdata({ name: req.body.username, 
//      password:req.body.password});
//      newUser.save();
//      res.render("secrets.ejs");
//  });
//  var data;
//  app.post('/login',function(req,res){
//    const pass= userdata.find({name:req.body.username} ,function(err, data){
//     console.log(">>>> " + (data));
//     console.log(">>>> " + (data[0]._id));
    

//    if((data[0].password)==(req.body.password))
//    {
//     res.render("secrets.ejs");
//    }
//    else
//    res.send("<h1>Wrong Password or Username</h1>");
//  });
// });


//  app.listen(3000, function(){
//     console.log("Server started on port 3000.");
//   });
  
// Required dependencies 
const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const cookieSession = require('cookie-session');

// cookieSession config
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: ['randomstringhere']
}));

app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

// Strategy config
passport.use(new GoogleStrategy({
        clientID: '266199349204-oun4vjrm0s7ia0megptgn54u9joti7lf.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:8000/auth/authorised'
    },
    (accessToken, refreshToken, profile, done) => {
        done(null, profile); // passes the profile data to serializeUser
    }
));

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
    done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
    done(null, user);
});

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.send('You must login!');
    }
}

// Routes
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// passport.authenticate middleware is used here to authenticate the request
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile'] // Used to specify the required data
}));

// The middleware receives the data from Google and runs the function on Strategy config
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/secret');
});

// Secret route
app.get('/secret', isUserAuthenticated, (req, res) => {
    res.send('You have reached the secret route');
});

// Logout route
app.get('/logout', (req, res) => {
    req.logout(); 
    res.redirect('/');
});

app.listen(8000, () => {
    console.log('Server Started!');
});