"use strict";
var request = require("request");
var name, status;
var FinishedOne =false, FinishedTwo = false;
request.get(
    "http://localhost:8080/getUsername?id=1234",
    function(err, res, body) {
        var result = JSON.parse(body);
        name = result.value;
        markFinished("First");
    }
);
request.get(
    "http://localhost:8080/getStatus?id=1234",
    function(err, res, body) {
        var result = JSON.parse(body);
        status = result.value;
        markFinished("Second");
    }
);

function markFinished(step) {
    if(step == "First") {
        FinishedOne = true;
    }
    if(step == "Second") {
        FinishedTwo = true;
    }
    if(FinishedOne && FinishedTwo) {
        console.log("All Finished!!");
    }
}