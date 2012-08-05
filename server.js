var express = require('express');
var app=express();

var user1 = { name : "JC",email :"jc@mail.com"};
var user2 = { name : "Claude",email :"claude@mail.com"};	
var users = [user1,user2];

app.get('/', function(request, response){
	console.log("Request on /");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello world");
	response.end();
});

app.get('/user', function(request, response){
	console.log("Request on /user");
	response.writeHead(200,{"Content-Type":"application/json"});
	response.write(JSON.stringify(users));
	response.end();
});

app.get('/user/:id', function(request, response){
	var id = request.param('id');
	console.log("Request on /user with parameter id=" + id);
	if (id == 1){
		response.writeHead(200,{"Content-Type":"application/json"});
		response.write(JSON.stringify(user1));
		response.end();
	}else if(id ==2){
		response.writeHead(200,{"Content-Type":"application/json"});
		response.write(JSON.stringify(user2));
		response.end();
	}else{
		response.writeHead(404);
		response.end();
	}
});


app.listen(8081);