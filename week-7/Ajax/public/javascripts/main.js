$(function(){

	// $.ajax('/api', {
	// 	success: function(data){
	// 		console.log(data);
	// 	}
	// });
	
	$.post('/api', {message: "hi from client"}, function(data){
		console.log(data);
	});

	$("#my-button").click(function(){
		$.ajax('/counter', {
			success: function(data){
				$(".appendme").append(data.counter);
			}
		});
	});



});