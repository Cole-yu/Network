var express = require('express');
var proxyMiddleWare = require("http-proxy-middleware");
var proxyPath = "http://127.0.0.1:4000";//目标后端服务地址(公司同事电脑地址)
var proxyOption = {
	target:proxyPath,
	changeOrigoin:true
};
var app = express();
app.use(express.static("./public"));

app.get('/home', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
})
app.use("/proxy", proxyMiddleWare(proxyOption))//这里要注意"/proxy" 是匹配的路由,它会将匹配的路由进行转发，没匹配到的就不会转发。('/discern'完全可以写成'/'就是说所有路由都可以访问)
app.listen(3300);