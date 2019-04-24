var express = require('express');
var bodyparser = require ('body-parser');
var fs = require ('fs');
var path = require ('path');

var app = express();

app.use (bodyparser.json()); 
app.use(express.static(path.join( __dirname,'public')))
app.use('/uploads',express.static('uploads'));
app.all('/*',function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Methods",'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers",'Content-Type,Accept,token,Authorization');
  if(req.method=='OPTIONS'){
      res.status(200).end();
  }
  else{
      next();
  }
});
app.use('/',require('./routes'));
var port=process.env.PORT|| 8000;
app.listen(port,function(){
    console.log('running on port'+port);
});