var map = function(input, f) {
	var output = [];
	for (var i=0; i<input.length;i++) {
		var x = f(input[i]);
		output.push(x);
	}
	return output;
};

// map(["hi", "colorado", "refactoru"], function(y) {return y.length});


var filter = function(input, f) {
	var output = [];
		for (var i=0; i<input.length;i++) {
			if (f(input[i]))
				{
					output.push(input[i]);
				}	
		}
	return output;
};

filter([2,8,6,3,8,9], function(item) {return item > 7;});

var reduce = function(arr, starter, f) {
	var output = [];
	for (var i=0; i<arr.length; i++) {
		var y = f((arr[i])+(starter));
		var z = y + (f((arr[i])+(starter)));
		output.push(z);
	}
	return output;
};

reduce([1,2,3], 0, function(a,b) {return a + b});