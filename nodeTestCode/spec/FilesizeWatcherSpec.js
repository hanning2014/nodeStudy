"use strict";
var FilesizeWatcher = require("../src/FilesizeWatcher");
var exec = require("child_process").exec;
describe("FilesizeWatcher", function() {
    var watcher;
    afterEach(function() {
        watcher.stop();
    });
    it("should fire a 'grew' event when the file grew in size", function (done) {
        var path = "watcher.txt";
        exec('rm -f ' + path + ' ; touch ' + path , function (){
            watcher = new FilesizeWatcher(path);
            watcher.on("grew", function (gain) {
                expect(gain).toBe(5);
                done();
            });
            exec("echo 'test' > " + path, function() {});
        });
    });
    it("shoule fire a 'shrank' event when the file grew in size ", function (done) {
        var path = "watcher.txt";
        exec('rm -f ' + path + '; echo "test" > ' + path, function() {
            watcher = new FilesizeWatcher(path);
            watcher.on("shrank", function(loss) {
                expect(loss).toBe(3);
                done();
            });
            exec("echo 'test' > " + path, function() {});
        });
    });
    it("should be 'error' if path does not start with a slash ", function (done) {
        var path = "tt";
        watcher.on('error', function(err) {
            expect(err).toBe("path does not start with a slash");
            done();
        });
    });
});
