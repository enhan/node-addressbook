// module database (an array !)

var users=[];

var getUserById = function(id, callback){
	process.nextTick(function(){
		callback(users[id]);
	});
};

var getAll = function(callback){
	process.nextTick(function(){
		console.dir(users);
		callback(users);
	});
};

var addUser= function(user,callback){
	console.dir(user);
	process.nextTick(function(){
		users.push(user);
		console.dir(users);
		callback();
	});
}

exports.getUserById = getUserById;
exports.getAll = getAll;
exports.addUser = addUser;