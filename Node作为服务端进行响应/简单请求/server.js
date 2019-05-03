var http = require('http');
var querystring = require('querystring');
var util = require('util');

var server = http.createServer(function(req, res){
	var post = '';
	req.on('data', function(chunk){
		post += chunk;
	});
	req.on('end', function(){
		post = querystring.parse(post);

		res.writeHead(200,{			
			"Access-Control-Allow-Origin":"*",
			"Access-Control-Allow-Headers":"Content-Type",
			"Content-Type":"text/html;charset=utf-8"
		});
		res.write('<h1>Hello world!</h1>');
		res.end(util.inspect(post));
	});		
})

server.listen(3000);