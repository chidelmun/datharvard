var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'demo')));

app.listen(5000, () => {
    console.log('App running on port 5000....');
})