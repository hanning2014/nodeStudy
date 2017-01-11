"use strict";
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

connection.query(
    "SELECT * FROM node.test;",
    function(err, results, fields) {
        if(err){
            console.log(err);
        }else {
            console.log(results)
        }
        connection.end();
    }
);