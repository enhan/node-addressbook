$(document).ready(function(){
	
	$("#submit").click(function(){

		$.post('user', JSON.stringify({name:$("#name").val(), email:$("#email").val() }), function(data){

		}, 'text');
	});
});