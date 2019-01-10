const express = require('express'),
      hbs = require('hbs'),
      mongoose = require('mongoose'),
      port = process.env.PORT || 3000;

var app = express();
app.use(express.static('public'));
app.set('view engine', 'hbs');
//var routes
var accRoute = require('./routes/acc');
//middlewares
app.use(accRoute);

app.listen(port, () => {
    console.log('listenning from flashfat servers');
});
