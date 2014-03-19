var city = {
	name: "boulder", 
	population: 551501
}

var size = function() {
	if (this.population > 100000)
	{
		console.log("large");
	}
	else if (this.population >= 25000 && this.population <= 100000)
	{
		console.log("medium");
	}
	else {
		console.log("small");
	}
};

size.call(city);