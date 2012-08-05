
$(document).ready(function(){
	
	$("#submit").click(function(){
// 		alert("click");
// 		var user = ;
		$.post('http://localhost:8081/user', JSON.stringify({name:$("#name").val(), email:$("#email").val() }), function(data){
// 
		}, 'text');
	});
});