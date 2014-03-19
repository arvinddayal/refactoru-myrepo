var fs = require('fs');

var inputFile = process.argv[2];
var outputFile = process.argv[3];


fs.readFile (inputFile, function(err, inputFileData){
	fs.writeFile(outputFile, inputFileData, function(err) {
		if(err) {
			console.log(err);
		}
		else {
			console.log("success");
		}
	});
});