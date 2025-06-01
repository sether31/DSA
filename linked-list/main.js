import LinkedList from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("hamster");
list.append("snake");
list.append("turtle");

console.log(`List: ${list.toString()}`);
console.log(`Find (parrot): at index ${list.find("parrot")}`);
console.log(`Contains (dog): ${list.contains("dog")}`);
console.log(`Size: ${list.size()}`);
console.log(`Head: ${list.heads()}`);
console.log(`Tail: ${list.tail()}`);

console.log(`Remove Last: ${list.pop()}`);
console.log(`List: ${list.toString()}`);
console.log(`Node of index (1): ${list.at(1)}`);
