var express = require('express');// libraries that we 'require'
var path = require('path');
var app = express(); //express application
var rootPath = path.normalize(__dirname + '/../'); //points to scripts that webserver.js is inside of -- one directory above..

app.use(express.static (rootPath + '/app'));

app.listen(8000);
console.log('Listening on port 8000...');