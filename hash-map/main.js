import HashMap from "./hashMap.js";

const test = new HashMap();

// add items
test.setItem('apple', 'red');
test.setItem('banana', 'yellow');
test.setItem('carrot', 'orange');
test.setItem('dog', 'brown');
test.setItem('elephant', 'gray');
test.setItem('frog', 'green');
test.setItem('grape', 'purple');
test.setItem('hat', 'black');
test.setItem('ice cream', 'white');
test.setItem('jacket', 'blue');
test.setItem('kite', 'pink');
test.setItem('lion', 'golden');
test.setItem('moon', 'silver');

// get a value
console.log(`Get "dog": ${test.getItem('dog')}`); // brown

// remove a key
console.log(`Remove "banana": ${test.removeItem('banana')}`); // true
console.log(`Remove "unicorn": ${test.removeItem('unicorn')}`); // false

console.log(`Has "apple": ${test.has('apple')}`);      // true
console.log(`Has "banana": ${test.has('banana')}`); // false

// show total entries
console.log(`Length: ${test.length()}`);

// show all keys
console.log(`All keys: ${test.keys()}`);

// show all values
console.log(`All values: ${test.values()}`);

// show all entries
console.log(`Show entries:`);
console.log(test.entries());

// clear the map
test.clear();

console.log(`\nAfter clear:`);
console.log(`Length: ${test.length()}`);
console.log(`All keys: ${test.keys()}`);
console.log(`All values: ${test.values()}`);
console.log(`Entries: ${JSON.stringify(test.entries())}`);
