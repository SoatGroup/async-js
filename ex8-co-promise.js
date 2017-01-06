var co = require('co');
var fsp = require('fs-promise');
 
function* gen() {
    var file1 = yield fsp.readFile(`file1.txt`, `utf-8`);
    console.log(file1);
    var file2 = yield fsp.readFile(`file2.txt`, `utf-8`);
    console.log(file2);
}
 
// la fonction co retourne une promesse
co(gen)
.then(function() {
    console.log('success');
}, function(err) {
    console.log(err);
});