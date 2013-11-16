var express = require("express")

function main(expressFactory){
	expressFactory = expressFactory || express;
	var app = expressFactory();

	var i = 0;
	app.get('/', function(req, res){
	  i++;
	  res.send('Hello World'+i);
	});

	app.get('/reset', function(req, res){
	  i=0;
	  res.send('reset');
	});

	app.listen(3000);
	console.log('Express started on port 3000');
	return app;
}

module.exports = main;