// Require express to make easy
// routing on server side.
const express = require("express");

// Creating express object
const app = express();

// Require path module
const path = require('path');

// Require pug template engine
const pug = require("pug");

// Require mongoose to use mongoDb
// in a easier way
const mongoose = require("mongoose");

// Define a port number
const port = 3000;

// Make a static route to use your
// static files in client side
app.use('/static', express.static('static'));

// Middleware for parsing
app.use(express.urlencoded());

// Define and use pug engine so also
// declare path on rendering
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/home.pug', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('home.pug', params);
})


app.get('/feedback_form.pug', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('feedback_form.pug', params);
})
app.get('/Achievements.pug', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('Achievements.pug', params);
})
app.get('/Awards.pug', (req, res)=>{
   
    res.status(200).render('Awards.pug');
})
app.get('/About.pug', (req, res)=>{
   
    res.status(200).render('About.pug');
})


// Database Connection
mongoose.connect(
	"mongodb://localhost:27017/feedback",
	{ useUnifiedTopology: true }
);

// Create schema
const feedSchecma = mongoose.Schema({
	name: String,
	email: String,
	msg: String
});

// Making a modal on our already
// defined schema
const feedModal = mongoose
	.model('feeds', feedSchecma);

// Handling get request
app.get('/', function (req, res) {
	// Rendering your form
	res.render('home.pug');
});

// Handling data after submission of form
app.post("/feedback_form.pug", function (req, res) {
	const feedData = new feedModal({
		name: req.body.name,
		email: req.body.email,
		msg: req.body.msg
	});
	feedData.save()
		.then(data => {
			res.render('feedback_form.pug',
        { msg: "Your feedback successfully saved." });
		})
		.catch(err => {
			res.render('feedback_form.pug',
				{ msg: "Check Details." });
		});
})

// Server setup
app.listen(port, () => {
	console.log("server is running");
});
