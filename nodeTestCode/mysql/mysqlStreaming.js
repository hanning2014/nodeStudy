"use strict";
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "node"
});
var query = connection.query("select id, content from test");
query.on("error", function(err) {
    console.log("A database can not connected");
});

query.on("fields", function(err) {
    console.log("received fields information!!");
});

query.on("result", function(res) {
    console.log("received results:" + res);
});

query.on("end", function() {
    console.log("query execution has finished!!!!");
    connection.end();
});