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

var myIterator = makeIterator();

 console.log(myIterator.next().value); // 0
 console.log(myIterator.next().value); // 1
 console.log(myIterator.next().value); // 2
 console.log(myIterator.next().value);
 console.log(myIterator.next().value);
 console.log(myIterator.next().value);
 console.log(myIterator.next().value);
 console.log(myIterator.next().value);
 console.log(myIterator.next().value);
 console.log(myIterator.next().value);
 console.log(myIterator.next().value); // 10
 console.log(myIterator.next().done); // true