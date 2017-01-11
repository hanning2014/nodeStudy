"use strict";
var mysql = require("mysql");
var http = require("http");
var url = require("url");
var queryString = require("querystring");
htto.createServer(handleRequest).listen(8888);

// function to handles htto requests
function handleRequest(request, response) {
    var pageCount = "<html>" +
                    "<head>" +
                    "<meta htp-equiv = 'Content-Type'" +
                    "content = 'text/html; charset = UTF-8' />" +
                    "</head>" +
                    "<body>" +
                    "<form action = '/add' method = 'post'>" +
                    "<input type = 'text' name = 'content' />" +
                    "<input type = 'submit' value = 'add content' />";
}