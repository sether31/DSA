import Tree from "./bst.js";
import { getRandomArray, printTraversal } from "./driver.js";


const randomArray = getRandomArray(); // random nums < 100
console.log("Random array used:", randomArray);

const tree = new Tree(randomArray);

console.log("\n== Initial Tree ==");
tree.prettyPrint();

console.log("\nIs balanced initially?", tree.isBalanced()); // should be true

console.log("\n== Traversals (Balanced) ==");
printTraversal("Level Order", (cb) => tree.levelOrder(cb));
printTraversal("Pre Order", (cb) => tree.preOrder(cb));
printTraversal("In Order", (cb) => tree.inOrder(cb));
printTraversal("Post Order", (cb) => tree.postOrder(cb));

// ========== Unbalance the Tree ==========
console.log("\n== Unbalancing Tree by Adding >100 ==");
[101, 102, 103, 104].forEach(num => tree.insertItem(num));

tree.prettyPrint();
console.log("\nIs balanced after unbalancing?", tree.isBalanced()); // likely false

// ========== Rebalancing ==========
console.log("\n== Rebalancing Tree ==");
tree.rebalance();
tree.prettyPrint();
console.log("\nIs balanced after rebalancing?", tree.isBalanced()); // should be true

console.log("\n== Traversals (After Rebalance) ==");
printTraversal("Level Order", (cb) => tree.levelOrder(cb));
printTraversal("Pre Order", (cb) => tree.preOrder(cb));
printTraversal("In Order", (cb) => tree.inOrder(cb));
printTraversal("Post Order", (cb) => tree.postOrder(cb));
