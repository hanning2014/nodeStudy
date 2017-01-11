"use strict";
var http = require("http");
var url = require("url");
var queryString = require("querystring");
http.createServer(function(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    var id = queryString.parse(query)["id"];
    var result = {
        "pathname": pathname,
        "id": id,
        "value": Math.floor(Math.random() * 100)
    };
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(result));
}).listen(8080, function(){
    console.log("Echo Server listening on poart 8080");
});