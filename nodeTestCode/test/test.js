// var write_world = function() {
//     console.log("world!!!");
// };

// console.log(" Hello！！！");

// setTimeout(write_world, 1000);

//External events, like our HTTP request, are only handled between
// loop iteration and the next;
var http = require("http");
var listen = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<b>Hello world</b>");
    response.end();
});
listen.listen(9000);
var a;
for (var i=0; i < 10000000000; i += 1) {
    a = i;
}
console.log('For loop has finished');