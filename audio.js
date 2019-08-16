const express = require('express');
const app = new express();
const https = require('https');
const fs = require('fs');

app.get('/',function(req,res) {
  res.sendFile(__dirname + '/audio.html');
});

app.get('/Mp3LameEncoder.js',function(req,res) {
  res.sendFile(__dirname + '/Mp3LameEncoder.js');
});

var port = 3000;

/*app.listen(port, () => { 
    console.log('Server is up and running on port numner ' + port);
});*/

console.log('port: ' + port); //prints correctly
  const options = {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('key-cert.pem')
    };
    
    https.createServer(options, app).listen(port);

module.exports = app;