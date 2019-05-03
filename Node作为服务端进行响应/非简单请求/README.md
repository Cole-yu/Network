# 触发非简单请求的方式
```
（1) 请求方法是以下三种方法之一：
		HEAD
		GET
		POST

（2）HTTP的头信息不超出以下几种字段：
		Accept
		Accept-Language
		Content-Language
		Last-Event-ID
		Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

凡是不同时满足上面两个条件，就属于非简单请求。

参考链接	http://www.ruanyifeng.com/blog/2016/04/cors.html
```