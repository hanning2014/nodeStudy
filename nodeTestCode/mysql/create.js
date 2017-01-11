"use strict";
var mysql = require("mysql");
var connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root"
    }
);

connection.query("create database node", function (err) {
    if(err) {
        console.log("could not create node database!");
    }
});

connection.query("use node", function (err) {
    if(err) {
        console.log("could not switch to database!!!");
    }
});

connection.query("create table test (id INT(11) AUTO_INCREMENT, content VARCHAR(255), PRIMARY KEY(id))",
    function(err) {
        if(err) {
            console.log("create table test failer!!!");
        }
});

connection.query("INSERT INTO test (content) VALUES ('hello')");
connection.query("INSERT INTO test (content) VALUES ('world')");
connection.end();