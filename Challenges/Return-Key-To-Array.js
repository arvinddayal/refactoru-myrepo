var cityState = {
	canfield: "Ohio", 
	boulder: "CO", 
	austin: "TX",
	seattle: "WA",
};


var myArray = [];

for (key in cityState) {
	myArray.push(key);
};

console.log(myArray);