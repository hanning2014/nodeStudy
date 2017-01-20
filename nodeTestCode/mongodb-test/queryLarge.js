"use strict";
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
    "mongodb://127.0.0.1:27017/accouting",
    function(err, connection) {
        if(!err) {
            console.log("connected success!!!");
        }
        var collection = connection.collection("customers");
        collection.find(
            {"v": {"$gt": 5}},
            {"skip": 100000, limit: 10, "sort": "v"}
        ).toArray(function (err, documents) {
            console.dir(documents);
            connection.close();
        });
    }
);