var cityState = {
	canfield: "Ohio", 
	boulder: "CO", 
	austin: "TX",
	seattle: "WA",
};

var length = 0;

var kvReturn = function (cityState) {	
	for (key in cityState) {
	length ++};
	return length;
};

kvReturn(cityState);

console.log(length)