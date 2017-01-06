var fs = require('fs');
var iterator =  fileReader();
 
function readFile(path, encoding) {
    fs.readFile(path, encoding, function(err, data) {
        if(err) return iterator.throw(err);
        iterator.next(data);
    });
}
 
function* fileReader() {
    var file1 = yield readFile('file1.txt', 'utf-8');
    console.log(file1);
    var file2 = yield readFile('file2.txt', 'utf-8');
    console.log(file2);
}
 
// Début du parcours de l'itérateur
iterator.next();