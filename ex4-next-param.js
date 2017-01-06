function* gen() {
    var valFromNext = yield 0;
    console.log(`valFromNext = ${valFromNext}`);
}
 
var it = gen();
 
console.log(it.next().value);
// Print 0
console.log(it.next(1).done);
// Print valFromNext = 1
// Print true