var express = require('express');
var path = require('path');

var routes = require('../routes/index.js');

var app = express();

app.set('views', path.join(__dirname, '../views'));

app.use(app.router);
app.use(express.static(path.join(__dirname, '../public')));

app.use(routes.index);


var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log(' - listening on ' + port+ ' ' + __dirname);
});
