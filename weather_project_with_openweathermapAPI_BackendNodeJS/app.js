const express=require("express");
const app=express();
const https = require('https');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.render('weather.html');

});
 

app.post('/',function(req,res){
    
https.get("https://api.openweathermap.org/data/2.5/weather?q="+req.body.city+"&appid=wrongAPIfa7a49560d30a5d4dda776e71&units=metric", (resp) => {
  

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    const data = chunk;
  
  var update=JSON.parse(data);

  // The whole response has been received. Print out the result.
  
   res.write("<h1>The temperature of "+req.body.city+" is "+(update.main.temp)+" degree celcius  <p><h2>and weather is</h2></p>");
   console.log(update.weather[0].icon);
   res.write("<img src='http://openweathermap.org/img/wn/"+update.weather[0].icon+"@2x.png' alt=''>")
});

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
});
app.listen(3000,function(){
    console.log("its successfull");
})

// b319e00d8239ec0f068c7afa99761d82