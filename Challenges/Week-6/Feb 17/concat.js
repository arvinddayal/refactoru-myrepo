var fs = require('fs');

var outputFile = process.argv[2];
var inputFiles = process.argv.slice(3);

console.log(inputFiles);

var inputInfo = function(err) {
	for (var i = 0; i < inputFiles.length; i++) {
		var x = fs.readFile(inputFiles[i], function(err, data) {});
		return x;
	}
};

console.log(inputInfo());


// fs.readFile(inputInfo, function(err, inpFileData){
// 	fs.writeFile(outputFile, inpFileData, function(err){
// 		if(err) {
// 			console.log(err);
// 		}
// 		else {
// 			console.log("success");
// 		}
// 	});
// });