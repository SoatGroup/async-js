var co = require('co');
var fs = require('fs');
 
function makeReadFileThunk(path, encoding) {
    return function(callback) {
        fs.readFile(path, encoding, callback);
    };
}
 
function* gen() {
    var file1 = yield makeReadFileThunk(`file1.txt`, `utf-8`);
    console.log(file1);
    var file2 = yield makeReadFileThunk(`file2.txt`, `utf-8`);
    console.log(file2);
}
 
co(gen)
.then(function() {
    console.log('success');
}, function(err) {
    console.log(err);
});