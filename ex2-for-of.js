function makeIterator() {
  var elem = 0;
  
  var iterator = {
    next: function() {
      return elem <= 10 ?
      { value: elem++, done:false } :
      { done:true };
    }
  };
  
  return iterator;
}

var myIterable = {};
myIterable[Symbol.iterator] = makeIterator;
 
for(var val of myIterable) {
    console.log(val);
}

console.log('\nFOR..OF with an array :');

for (var elem of [3, 4, 7]) {
    console.log(elem);
}