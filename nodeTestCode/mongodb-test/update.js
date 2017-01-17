"use strict";
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
        "mongodb://127.0.0.1:27017/accouting",
        function(err, connection) {
            if(!err) {
                console.log("connected success!!!");
            }
            var collection = connection.collection("customers");
            collection.update({},{"$set": {"age": 24 }},{"multi": true}, function(err, count) {
                if(!err) {
                    console.log("update success!!!", count, "documents");
                }
                collection.find().toArray(function(err, documents) {
                    console.dir(documents);
                    connection.close();
                });
            });
        }
    )