# 使用Express的 http-proxy-middleware 中间件实现正向代理客户端
```
	客户端发出的指定为/proxy的请求，全部被Express 的 http-proxy-middleware中间件代理，
	转化到为 http://127.0.0.1:4000 的请求，避免了跨域。

	一种新的解决跨域的方案，之前一直都是通过CORS的 Access-Control-Allow-Origin来解决跨域

	客户端：
		http://127.0.0.1:3300/home 表示客户端页面，用来作为客户端发起请求；
	代理转发：
		proxyServer.js 是 Express 正向代理请求 http://127.0.0.1:3300/proxy；
	后台：
		server.js 模拟的是真正的后台接口，地址是127.0.0.1：4000。

	启动方式：
		node server.js
		node proxyServer.js
		浏览器中输入http://127.0.0.1:3300/home，点击发起请求按钮
```