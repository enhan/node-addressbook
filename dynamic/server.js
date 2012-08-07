var express = require('express');
var customdb = require('./customdb');

var app=express();

app.get('/', function(request, response){
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write("Hello world");
	response.end();
});

app.get('/user', function(request, response){
	customdb.getAll(function(users){
			response.writeHead(200,{"Content-Type":"application/json"});
			response.write(JSON.stringify(users));
			response.end();
	});
	
});

app.get('/user/:id', function(request, response){
	var id = request.param('id');
	customdb.getUserById(id, function(user){
		if (user != null){
			response.writeHead(200,{"Content-Type":"application/json"});
			response.write(JSON.stringify(user));
			response.end();
		}else{
			response.writeHead(404, {"Content-Type":"text/plain"});
			response.write("Not Found");
			response.end();
		}
	});
	
});

app.post('/user', function(request, response){
	request.setEncoding("utf8");
	var requestContent = "";
	request.addListener("data",function(part){
		requestContent += part;
	});
	request.addListener("end", function(){
			customdb.addUser(JSON.parse(requestContent), function(){
			response.writeHead(200,{"Content-Type":"application/json"});
			response.end();
 		});
	});
});

app.listen(8081);