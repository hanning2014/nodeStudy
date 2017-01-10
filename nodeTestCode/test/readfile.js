"use strict";
var fs = require("fs");
var stream = fs.createReadStream("tt.txt"); // stream called Event Emitter
var content = "";
stream.on('data', function(data) {
    //console.log("Recived data" + data);
    content += data;
});
stream.on("end", function() {
    console.log("Read the end of the file!" + content);
});

stream.on("error", function(error) {
    console.log(error);
});
// createReadStream
// on : listen the read file
// end: listen the end of reading file