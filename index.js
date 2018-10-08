const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

app = express();

app.get('/', function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    readStream.pipe(res);
});

app.route('/propose')
    .get(function(req, res){
        res.writeHead(200, {'Content-Type' : 'text/html'});
    var readStream = fs.createReadStream(__dirname + '/propose.html', 'utf8');
    readStream.pipe(res);
    });
app.listen(3000, function(){
    console.log("Listening to port 3000");
});