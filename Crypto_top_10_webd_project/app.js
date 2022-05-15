// const express=require("express");
// const app=express();
// const https = require('https');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/',function(req,res){
    
// https.get("https://api.wazirx.com/api/v2/tickers", (resp) => {
  

//   // A chunk of data has been received.
//   resp.on('data', (chunk) => {
//     const data = chunk;
  
//   var update=JSON.parse(data);

//   // The whole response has been received. Print out the result.
// //   console.log(update);
//   console.log(update);
  
   
// });

// }).on("error", (err) => {
//   console.log("Error: " + err.message[0]);
// });
// });
// app.listen(3000,function(){
//     console.log("its successfull");
// });


const express = require('express');
const request = require('request');

const app = express();

app.set('view engine', 'ejs');

const PORT = 3000 || process.env.PORT;
let arr=["btcinr","xrpinr","ethinr","trxinr","eosinr","zilinr","batinr","zrxinr","reqinr","nulsinr"];

app.get("/", (req, res)=>{
    let url = "https://api.wazirx.com/api/v2/tickers";
    try{
        request.get(url,{},(err, resp, body)=>{
            if(err){
                console.log(err);
            }
            else{
                let jsonObject = JSON.parse(body);
                for (var i=0;i<10;i++)
                 console.log(jsonObject[arr[i]]);
                 var d={"data":jsonObject,"arrb":arr};
                 console.log(d.arrb[1]);
                res.render("home.ejs", {"d":d});
            }
        });
    }
    catch(err){
        res.json({message:"Something went wrong."});
    }
});

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});
