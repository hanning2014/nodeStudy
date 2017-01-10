"use strict";
var fs = require("fs");
var utils = require("util");
var EventEmitters = require("events").EventEmitter;
var FilesizeWatcher = function(path) {
    var selfs = this;
    selfs.callbacks = {};
    if (/^\//.test(path) === false) {
            process.nextTick(function() {
                selfs.emit("error", "Path does not start with a slash!!!");
            });
            return;
    };
    fs.stat(path, function(err, stats) {
           selfs.lastfilesize = stats.size;
    });
    selfs.interval = setInterval(
        function(){
            fs.stat(path, function(err, stats) {
                if(stats.size > selfs.lastfilesize) {
                    selfs.emit("grew",stats.size - selfs.lastfilesize);
                    selfs.lastfilesize = stats.size;
                }
                if(stats.size < selfs.lastfilesize) {
                    selfs.emit("shrank", selfs.lastfilesize - stats.size);
                    selfs.lastfilesize = stats.size;
                }
            });
        },1000);
};

utils.inherits(FilesizeWatcher, EventEmitters);

FilesizeWatcher.prototype.stop = function() {
    clearInterval(this.interval);
};

module.exports = FilesizeWatcher;