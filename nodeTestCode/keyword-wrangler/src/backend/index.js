"use strict";
var Percolator = require("percolator").Percolator;

var port = 8090;
var server = Percolator({"port": port});

server.route("/api/keywords",
    {
        GET: function(req, res) {
            res.object({"foo": "bar"}).send();
        }
    }
);

server.listen(function () {
    console.log("server start and listeing on port");
});
