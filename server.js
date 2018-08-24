var express = require('express');
var body = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(body.json());
app.use(body.urlencoded({extended: true}));
app.use(body.text());
app.use(body.json({type:'application/vnd.api+json'}));
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
app.listen(PORT, function(){
    console.log("local host:" + PORT);
});