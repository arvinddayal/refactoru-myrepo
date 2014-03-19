var load = function() {

	var changeColor = function() {
		$('#changeColor').css('color', '#ff00c3');

	};

	var changeBack = function() {
		$('#changeColor').css('color', '#000');

	};

$('#changeColor').on('mouseover', changeColor);

$('#changeColor').on('mouseout', changeBack);



};

$(document).on('ready', load);