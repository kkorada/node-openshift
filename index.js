var express = require('express');
var bodyParser = require('body-parser');

var os = require('os');

var app = new express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json({ type: 'application/*+json' }));

// console.log(os.networkInterfaces());

app.get('/', (req, res, next) => res.json(os.networkInterfaces()));

app.listen(app.get('port'), function () {
    console.log("Node app is running at :" + app.get('port'))
});