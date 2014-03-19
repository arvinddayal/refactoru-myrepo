var Repeater = (function(){
	var count = 0;
	var repeatString = function(str, n) {
		for (var i = 0; i < n; i++) {
			console.log(str);
		}
	};
	var repeatFunction = function(f, n) {
		for (var j = 0; j < n; j++) {
			f();
		}
	};
	var repeatMore = function(str) {
		count+=1;
		for (var k = 0; k < count; k++){
			console.log(str);
		}
	};
	var repeatFunctionTwice = function(f,n) {
		repeatFunction(f,n)+repeatFunction(f,n);
	};
	return {
		"repeatString": repeatString,
		"repeatFunction": repeatFunction,
		"repeatMore": repeatMore,
		"repeatFunctionTwice": repeatFunctionTwice
	};
}());