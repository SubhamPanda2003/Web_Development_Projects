

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set('views', __dirname + '/views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
var item=["wake up","sit down"];

app.get("/", function(req, res){
  res.render('Index.ejs',{item:item});
});
app.post("/",function(req,res){
  item.push(req.body.work);
  res.redirect("/"); // A Way of redirecting to the app.get section
})
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
