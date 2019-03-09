var http=require("http");
var qs=require("querystring");

http.createServer(function (req,res) {	
	switch( req.url ){
		case "/form":{
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
				
				// 用于key=value&key=value形式的表单,Form-Data的载荷,用于 Content-Type:application/x-www-form-urlencoded 
				txt = qs.parse(content);
				console.log(txt);
				
				res.write("参数：" + txt.userName);
				res.end();
			});
			break;
		};
		default:{
			res.writeHead(404,{});			
			res.end();
		}
	}		
		

		

}).listen(3000);

console.log("listen in localhost:3000");

