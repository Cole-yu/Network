var http = require('http');
var server = http.createServer(function (req, res) {
	var data = {
		name: 'yfx'
	}
	res.write(JSON.stringify(data));
	console.log('接收到客户端请求');
	res.end();
});
server.listen(4000);
console.log('server is listen at port 4000');