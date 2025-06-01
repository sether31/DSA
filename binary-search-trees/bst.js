class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(array) {
    const cleanArray = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(cleanArray, 0, cleanArray.length - 1);
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true){
    if(node === null) {
      return;
    }
    if(node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

  buildTree(arr, start, end){
    if(start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = this.buildTree(arr, start, mid - 1);
    node.right = this.buildTree(arr, mid + 1, end);

    return node;
  }

  insertItem(value, node = this.root){
    if(!node) return new Node(value);

    if(value < node.data){
      node.left = this.insertItem(value, node.left);
    } else{
      node.right = this.insertItem(value, node.right);
    }

    // this.rebalance()

    return node
  }

  deleteItem(value, node = this.root){
    if(!node) return null;

    if(value < node.data){
      node.left = this.deleteItem(value, node.left);
    } else if(value > node.data){
      node.right = this.deleteItem(value, node.right);
    } else{
      if(!node.left) return node.right;
      if(!node.right) return node.left;

      let minNode = node.right;
      while(minNode.left) minNode = minNode.left;

      node.data = minNode.data;
      node.right = this.deleteItem(minNode.data, node.right)
    }

    return node;
  }

  find(value, node = this.root){
    if(!node || node.data === value) return node;
    if(value < node.data) return this.find(value, node.left);
    return this.find(value, node.right)
  }

  levelOrder(callback){
    if(!callback) throw new Error("Callback function is required");

    const queue = [this.root];

    for(let node of queue){
      callback(node);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }

  inOrder(callback, node = this.root){
    if(!callback) throw new Error("Callback function is required");
    if(!node) return;

    this.inOrder(callback, node.left);
    callback(node);
    this.inOrder(callback, node.right);
  }

  preOrder(callback, node = this.root){
    if(!callback) throw new Error("Callback function is required");
    if(!node) return;

    callback(node);
    this.preOrder(callback, node.left);
    this.preOrder(callback, node.right);
  }

  postOrder(callback, node = this.root){
    if(!callback) throw new Error("Callback function is required");
    if(!node) return;

    this.postOrder(callback, node.left);
    this.postOrder(callback, node.right);
    callback(node);
  }

  // return how much depth the value far from the root
  depth(value, node = this.root, depth = 0){
    if(!node) return null;

    if(node.data === value) return depth;

    if(value < node.data){
      return this.depth(value, node.left, depth + 1);
    } else{
      return this.depth(value, node.right, depth + 1);
    }
  }

  // get height of a node
  height(node) {
    if (node === null) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  // check if the tree is balanced
  isBalanced(node = this.root) {
    if (node === null) return true;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    );
  }

  // rebalance the tree
  rebalance() {
    const nodes = [];
    this.inOrder((node) => nodes.push(node.data));
    this.root = this.buildTree(nodes, 0, nodes.length - 1);
  }
}


export default Tree