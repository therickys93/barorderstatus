const express = require('express');
const app = express();
const request = require('request');

const port = 3000;

var url = process.env.URL || 'http://localhost:8080/v1/status';

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/bower_components'))

app.get('/', function (req, res) {
	console.log('GET /');
	res.redirect('/status');
});

app.get('/status', function(req, res) {
	console.log('GET /status');
	request(url, function(error, response, body){
		console.log(body);
		var result = JSON.parse(body);
		res.render('index', { title: 'Stato BarOrder', server: result.server, database: result.database, version: result.version });
	});
});

app.listen(port, function () {
  console.log('Stato BarOrder listening on port ' + port);
});
