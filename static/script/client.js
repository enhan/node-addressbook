$(document).ready(function(){
	
	$.get('user', function(data){
		alert(data);
		data.forEach(function(value, index, array){
			var entry = "<tr><td>" + value.name + "</td><td>"+value.email + "</td></tr>";
			$("#addresses").append(entry);
		});
	});
	
	
	$("#submit").click(function(){

		$.post('user', JSON.stringify({name:$("#name").val(), email:$("#email").val() }), function(data){

		}, 'text');
	});
});