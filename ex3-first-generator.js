function* makeIterator() {
	for(var elem = 0; elem <= 10; elem++) {
		yield elem;
	}
}

var myIterator = makeIterator();

console.log(myIterator.next().value);
console.log(myIterator.next().value);
console.log(myIterator.next().value);

console.log('\nFOR...OF with generator : ');
for(elem of makeIterator()) {
    console.log(elem);
}