var express = require('express');
var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

app.listen(3000, function(){
  console.log('server is starting on port 3000.')
})
