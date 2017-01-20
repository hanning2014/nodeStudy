"use strict";
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
    "mongodb://127.0.0.1:27017/accouting",
    function(err, connection) {
        if(!err) {
            console.log("connected success!!!");
        }
        var collection = connection.collection("customers");
        collection.ensureIndex("v", function (err, indexName) {
            connection.close();
        });
    }
);