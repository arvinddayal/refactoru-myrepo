$(function(){

	$('#mybutton').on('click', function() {
	$(this).toggleClass('active');
	var x = $(this).css('background-color');
	$('#mainquote').css('color', x);
	});

});