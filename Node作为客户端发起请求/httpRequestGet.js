var http = require('http');
var querystring = require('querystring');

var	req = http.get("http://127.0.0.1:3000", function(res){
	res.setEncoding('utf-8');

	var body = [];
    console.log(res.statusCode);
    console.log(res.headers);

	res.on('data', function(data){
		console.log(data);
		body.push(data);
	});

	res.on('end', function(){
		body = Buffer.concat(body);
		console.log(body.toString());
	})
});
