class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value)

    if(this.root === null){
      this.root = newNode
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value) {
          //left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this
          }
          currentNode = currentNode.left
        } else {
          //right
          if(!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }

  }
  lookup(value){
    if (!this.root) {
      return false
    }
    let currentNode = this.root
    while(currentNode) {
      if(value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (currentNode.value === value) {
        return currentNode
      }
      return false
    }
  }
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = []; //this can get pretty big, this is where the memory issues come iin
    queue.push(currentNode);

    while(queue.length > 0) {
      currentNode = queue.shift()
      list.push(currentNode.value)
      if(currentNode.left) {
        queue.push(currentNode.left)
      }
      if(currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list
  }
  breadthFirstSearchR(queue, list) {
  if (!queue.length) {
    return list
  }
  let currentNode = queue.shift()
  list.push(currentNode.value)
  if(currentNode.left) {
    queue.push(currentNode.left)
  }
  if(currentNode.right) {
    queue.push(currentNode.right)
  }
  return this.breadthFirstSearchR(queue, list)
}
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.breadthFirstSearch()
tree.breadthFirstSearchR([tree.root], [])
console.log(tree.lookup(90))
// console.log(JSON.stringify(traverse(tree.root)))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

