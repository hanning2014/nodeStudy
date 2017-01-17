"use strict";
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
        "mongodb://127.0.0.1:27017/accouting",
        function(err, connection) {
            if(!err) {
                console.log("connected success!!!");
            }
            //console.log(err);
            var collection = connection.collection("customers");
            collection.insert({"name": "jane doe"}, function(err, count) {
                if(!err) {
                    console.log("insert success!!!");
                }
                collection.find().toArray(function(err, documents) {
                    console.dir(documents);
                    connection.close();
                });
            });
        }
    )