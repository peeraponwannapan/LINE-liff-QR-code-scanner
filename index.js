const express = require('express');
const app = express();
const path = require('path');
var bodyparser = require('body-parser');
var urlencodedparser = bodyparser.urlencoded({extended:false})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
  });

  app.post('/data_qrcode', urlencodedparser, function (req, res){  
    console.log(req.body.value);
    console.log('req received');

 });

  app.listen(2000);
  