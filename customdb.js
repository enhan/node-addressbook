// module database (an array !)

var users=[];

var getUserById = function(id, callback){
	process.nextTick(function(){
		callback(users[id]);
	});
};

var getAll = function(callback){
	process.nextTick(function(){
		callback(users);
	});
};

var addUser= function(user,callback){
	process.nextTick(function(){
		users.push(user);
		callback();
	});
}

exports.getUserById = getUserById;
exports.getAll = getAll;
exports.addUser = addUser;