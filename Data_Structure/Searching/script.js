/Binary Search Tree/; ///
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let curentNode = this.root;
      while (true) {
        if (value < curentNode.value) {
          if (!curentNode.left) {
            curentNode.left = newNode;
            return this;
          }
          curentNode = curentNode.left;
        } else {
          if (!curentNode.right) {
            curentNode.right = newNode;
            return this;
          }
          curentNode = curentNode.right;
        }
      }
    }
  }
  lookup(value) {
    let curentNode = this.root;
    while (curentNode) {
      if (value < curentNode.value) {
        curentNode = curentNode.left;
      }
      if (value > curentNode.value) {
        curentNode = curentNode.right;
      }
      if (value === curentNode.value) {
        console.log(curentNode);
        return curentNode;
      }
    }
    return false;
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    console.log(list);
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
  DFSInorder() {
    return traversInOrder(this.root, []);
  }

  DFSPostorder() {
    return traversPoststOrder(this.root, []);
  }

  DFSPreorder() {
    return traversPrestOrder(this.root, []);
  }
}

const traversInOrder = function (node, list) {
  if (node.left) {
    traversInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traversInOrder(node.right, list);
  }
  return list;
};

const traversPrestOrder = function (node, list) {
  list.push(node.value);
  if (node.left) {
    traversPrestOrder(node.left, list);
  }
  if (node.right) {
    traversPrestOrder(node.right, list);
  }
  return list;
};

const traversPoststOrder = function (node, list) {
  if (node.left) {
    traversPoststOrder(node.left, list);
  }
  if (node.right) {
    traversPoststOrder(node.right, list);
  }
  list.push(node.value);
  return list;
};

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.lookup(4);
console.log(tree);
// tree.breadthFirstSearch();
let r = tree.breadthFirstSearchR([tree.root], []);
// console.log(r);
let DFS = tree.DFSPostorder();
console.log(DFS);
