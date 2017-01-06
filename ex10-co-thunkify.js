var co = require('co');
var fs = require('fs');
var thunkify = require('thunkify');
 
var makeReadFileThunk = thunkify(fs.readFile);
 
function* gen() {
    try {
        var file1 = yield makeReadFileThunk(`file1.txt`, `utf-8`);
        console.log(file1);
        var file2 = yield makeReadFileThunk(`file2.txt`, `utf-8`);
        console.log(file2);
    } catch (err) {
        // Gérer exception
    }
}
 
co(gen);