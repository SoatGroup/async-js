var fsp = require('fs-promise');

function run(generator) {
    var it = generator();

    function go(elem) {
        if(elem.done) return;

        elem.value.then(function success(data) {
            return go(it.next(data));
        }, function error(err) {
            return go(it.throw(err));
        });
    }

    go(it.next());
}

function* fileReader() {
    try {
        var file1 = yield fsp.readFile(`file1.txt`, `utf-8`);
        console.log(file1);
        var file2 = yield fsp.readFile(`file2.txt`, `utf-8`);
        console.log(file2);
    } catch (err) {
        // Gérer exception
    }
}

run(fileReader);