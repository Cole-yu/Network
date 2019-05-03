var http = require('http');
var querystring = require('querystring');

var params = querystring.stringify({
	name: 'byvoid',
	email: 'byvoid@byvoid.com',
	addresss: 'fdsfsd',
});

var options={
	host: 'http://127.0.0.1:3000',
	path: '/application/node/post.php',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': params.length
	}
};

var	req = http.request(options, function(res){
	res.setEncoding('utf-8');
	res.on('data', function(data){
		console.log(data);
	});
	res.on('end', () => {
		console.log('No more data in response.')
	})
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

req.write(params);
req.end();
