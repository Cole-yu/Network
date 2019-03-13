var WebSocketServer = require('ws').Server,

wss = new WebSocketServer({ port: 8081 });

wss.on('connection', function (ws) {
    console.log('client connected');
    
    ws.on('message', function (message) {
        console.log(message);
    });

    var id = setInterval(()=>{
    	var date = new Date();
    	var time = date.getTime();
    	console.log("服务端定时推送了内容，内容是" + time);
    	ws.send("现在服务器时间是" + time);
    },2000);

    ws.on('close', function() {
		console.log('stopping client interval');
	    clearInterval(id);
	});
	
});