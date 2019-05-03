# Networks

###	Node作为服务端
```
	req是http.SeverRequest（服务端获取到的客户端请求，分get,post两种类型的请求）
		req有3个事件：
			data 	服务端接收到请求数据
			end 	服务端接收请求结束
			close 	服务端接收请求关闭

	res是http.SeverResponse（服务端返回给客户端的响应内容）
		res.setHeader()
		res.writeHead()
		res.statusCode = '404'
		res.write()把数据和响应状态码写入到响应头返回给客户端
		res.end() 响应结束
```

### Node作为客户端向其他服务器发起请求
```
	http.ClientRequest是http.request和http.get产生的对象，表示正在进行中的http请求，用于向服务器发送内容）；
	http.get是http.request的GET请求的简写方式；
	http.ClientResponse(客户端接收到服务端的数据，提供3个事件【data,end,close】)	。

	var options={
		host: 'http://127.0.0.1:3000',
		path: '/getDate',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',			
		}
	};
	http.request(option, function(res){
		res.on('data',function(){
			// 接收到服务端返回的结果
		});

		res.on('end',function(){
			// 接收返回结果结束
		});
	});


	http.get(url, function(res){
		res.on('data',function(){
			// 接收到服务端返回的结果
		});

		res.on('end',function(){
			// 接收返回结果结束
		});
	})
	客户端向服务端发起http请求；http.get是http.request的简化版
```