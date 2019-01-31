var express = require('express');
var path = require('path');
const PORT = process.env.PORT || 5000

var app = express();

app.use(express.static(path.join(__dirname, 'demo')));

app.listen(PORT, () => {
    console.log('App running on port 5000....');
})