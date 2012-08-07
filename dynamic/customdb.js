// module database
var mongo = require('mongoskin');

var db = mongo.db('localhost:27017/addressbook');

var getUserById = function(id, callback){
	process.nextTick(function(){
		db.collection('contacts').findOne({name:id}, function(err, post){
			callback(post);
		});
		
	});
};

var getAll = function(callback){
	process.nextTick(function(){
		db.collection('contacts').find().toArray(function(err, result){
			callback(result);
		});
	});
};

var addUser= function(user,callback){
	process.nextTick(function(){
		db.collection('contacts').insert(user, function (err, res){
			callback();
		});
	});
}

exports.getUserById = getUserById;
exports.getAll = getAll;
exports.addUser = addUser;