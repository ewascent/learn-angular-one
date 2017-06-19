/*jslint white:true */
/*global require express __dirname console */
/*js to start express web app */
var express = require('express');
var path = require('path');
/*start express app in root directory of application. __dirname comes from express*/
var rootpath = path.normalize(__dirname + '/../');
var webport = 8090;
var app = express();
app.use(express.static(rootpath));
app.listen(webport);
console.log('Starting...\n Listening on port: '
+ webport + '\nserving content from ' + rootpath
+ ' test with http://localhost:8090/stations.html' );
