var http=require("http");

http.createServer(function (req,res) {
	
	var content="",txt;
	
	req.on("data",function(data){

		content+=data;			

	});

	req.on("end",function(){	
		
		res.writeHead(200,{			
			"Access-Control-Allow-Origin":"*",
			"Access-Control-Allow-Headers":"Content-Type",
			"Content-Type":"text/html;charset=utf-8"
		});

		if(req.method != "OPTIONS"){		// 不加if判断，options预检请求时，content为空，JSON.parse解析空字符串报错：SyntaxError: Unexpected end of JSON input			
			console.log("content:" + content);

			// 用于Request Payload ，用于 Content-Type:application/json 复杂请求
			txt =JSON.parse(content);
			console.log(txt);
			
			res.write("参数：" + txt.userName);				
		}

		res.end();
					
	});	

}).listen(3000);

console.log("listen in localhost:3000");

