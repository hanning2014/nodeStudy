"use strict";
var MongoClient = require("mongodb").MongoClient;
MongoClient.connect(
    "mongodb://127.0.0.1:27017/accouting",
    function(err, connection) {
        var collection = connection.collection("customers");
        var doFind = function (callback) {
            collection.find().toArray(function (err, document) {
                console.dir(document);
                callback();
            });
        };
        var doInsert = function (i) {
            if(i < 20) {
                var value = Math.floor(Math.random() * 10);
                collection.insert(
                    {'n': "#" + i, "v": value},
                    function (err, count) {
                        doInsert(i + 1);
                    }
                )
            } else {
                console.log("inserted", i, "documents");
                doFind(function () {
                    doUpdate();
                })
            }
        };
        var doUpdate = function () {
            collection.update(
                {"v": {"$gt": 5}},
                {"$set": {"valuable": true}},
                {"multi": true},
                function (err, count) {
                    console.log("updated", count, "documents");
                    doFind(function () {
                        collection.remove(
                            {},
                            function() {
                                connection.close();
                            }
                        );
                    });
                }
            );
        };
        doInsert(0);
    }
    );