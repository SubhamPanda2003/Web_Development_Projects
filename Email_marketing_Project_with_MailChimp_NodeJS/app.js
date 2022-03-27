const express = require('express');
const app=express();
const bp = require("body-parser");
app.use(bp.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
var request = require('superagent');

app.get('/', function (req, res)
{
    res.render('Index.html');
});

var mailchimpInstance   = 'us14',
    listUniqueId        = 'd474fe7957',
    mailchimpApiKey     = 'a9546c8d95102a0e119ba252b300c4de-us14';

app.post('/', function (req, res) {
    request
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',          
          'merge_fields': {
            'FNAME': req.body.firstname,
            'LNAME': req.body.lastname
          }
          
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
              } else {
                res.send('Sign Up Failed :(');
              }
          });
});
   


app.listen(3000,function(){
    console.log("Server started successfully");
});


//a9546c8d95102a0e119ba252b300c4de-us14
//d474fe7957