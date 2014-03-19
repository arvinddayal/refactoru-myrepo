var load = function() {

	var showText = function() {
		var x = $('#inputBox').val();
		$('#displayBox').text(x);
	};



$('#inputBox').on('keyup', showText);
$('#remain').text(140 - showText.length);

};

$(document).on('ready', load);