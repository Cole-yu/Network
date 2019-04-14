var express = require('express');
var app = new express();
var Mock = require('mockjs');

function createMockDate(){
	// 将时间戳格式改为 'yyyy-MM-dd' 格式
	function formatDate(timeStamp){
	  var date = new Date(timeStamp);
	  var year = date.getFullYear();
	  var month = date.getMonth() + 1;
	  month = ('0'+month).substr(-2, 2);
	  var day = date.getDate();
	  day = ('0' + day).substr(-2, 2);
	  
	  return  year + ' - ' + month + ' - ' + day;
	}

	var Random = Mock.random;

	var __appTypeArr__ = ['类型A', '类型B', '类型C', '类型D', '类型E'];
	var __authorArr__ = ['Admin', 'userA', 'userB', 'userC', 'userD'];

	var __data__ = Mock.mock({
	  'appList|200-400': [{
	      'index|+1' : 1,
	      'appName' : "app",
	      'appType|1' : __appTypeArr__,
	      'author|1' : __authorArr__,
	      'createDate|1454896399587-1554896399587' : 1
	  }]
	})
	// 输出结果
	// console.log(JSON.stringify(__data__, null, 4));

	__data__.appList.forEach( value => {
	  value.appName = 'App' + value.index;
	  value.createDate = formatDate(value.createDate);
	});

	return __data__;
}

var data = createMockDate().appList;

// GET 请求
app.get('/', function(req, res){
	res.set('Access-Control-Allow-Origin', "*");
	res.send(data);
});

// POST 请求
app.post('/appList/:appType', (req,res) => {
	console.log(req.params.appType);

	var filterData = data.filter(value => {
		return value.appType == req.params.appType;
	});

	res.set('Access-Control-Allow-Origin', "*");	
	res.send(filterData);
});

app.listen(3000);
console.log("listen at port 3000");