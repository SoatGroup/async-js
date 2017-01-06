var fs = require('fs');
 
function run(generator) {
  var iterator = generator(go); 
 
  function go(err, data) {
    if(err) return iterator.throw(err);
    iterator.next(data);
  }
     
  // Début du parcours de l'itérateur
  go();
}
 
function* fileReader(cb) {
   try {
        var file1 = yield fs.readFile(`file1.txt`, `utf-8`, cb);
        console.log(file1);
        var file2 = yield fs.readFile('file2.txt', 'utf-8', cb);
        console.log(file2);
    } catch (err) {
        // Gérer exception
    }
}
 
run(fileReader);