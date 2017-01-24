"use strict";

var request = require("request");

describe("The API", function () {
    it("should response to a GET request at /api/keywords/", function (done) {
        request.get(
            {
                "url": "http://localhost:8090/api/keywords",
                "json": true
            },
            function (err, res, body) {
                expect(res.statusCode).toBe(200);
                expect(body.foo).toEqual("bar");
                done();
            }
        );
    });
});