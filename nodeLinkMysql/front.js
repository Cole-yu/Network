document.getElementById("btn").addEventListener("click", getData, true);

function  getData(){
	var xhr=new XMLHttpRequest();
	xhr.open("POST","http://localhost:3000/",true);
	
	xhr.onreadystatechange=callback;

	xhr.setRequestHeader("Content-Type","application/json");
	
	var params={
		name:"yfx",
		age:"27"
	}

	params=JSON.stringify(params);
	xhr.send(params);

	function callback(){
		if(xhr.readyState==4){
			if(xhr.status==200){			
				console.log(typeof(xhr.responseText));  		// string
				document.getElementById("output").innerHTML=xhr.responseText;

				var data = JSON.parse(xhr.responseText);  		// 解析成为对象
				// data = [ { "name":"yfx" , "age":"27" } ]  	// 数组对象
				console.log(data[0].name);
			}
		}
	}
}