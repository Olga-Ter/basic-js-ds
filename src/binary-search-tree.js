const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.Root = null;
  }

  root() {
    return this.Root;
    // remove line with error and write your code here
  }

  add(data) {
    let newNode = new Node(data);
    if (this.Root === null) {
      this.Root = newNode;
    } 
    else {
      function insertNode (node, newNode) {
        if (newNode.data < node.data) {
          if (node.left === null) {
            node.left = newNode;
          }
          else {
            insertNode (node.left, newNode);
          }
        }
        else {
          if (node.right === null) {
            node.right = newNode;
          }
          else {
            insertNode (node.right, newNode);
          }
        }
      }
      insertNode(this.Root, newNode)
    }
    // remove line with error and write your code here
  }

  has(data) {
    let ans;
    if (this.Root === null) {
      ans = false;
    }
    else {
      function searchNode (node, data) {
        if (node.data === data) {
          ans = true;
        }
        else if (data < node.data && node.left) {
          return searchNode (node.left, data);
        }
        else {
          if (data > node.data && node.right) {
          return searchNode (node.right, data);
        }
        else {
          ans = false;
        }
        }
      };
      searchNode (this.Root, data)
    }   
    return ans;
    // remove line with error and write your code here
  }

  find(data) {
    let ans;
    if (this.Root === null) {
      ans = null;
    }
    else {
      function searchNode (node, data) {
        if (node.data === data) {
          ans = node;
        }
        else if (data < node.data && node.left) {
          return searchNode (node.left, data);
        }
        else {
          if (data > node.data && node.right) {
          return searchNode (node.right, data);
        }
        else {
          ans = null;
        }
        }
      };
      searchNode (this.Root, data)
    }   
    return ans;
    // remove line with error and write your code here
  }

  remove(data) {
    if (this.Root === null) {
      return null;
    }
    else {
      function removeNode (node, data) {
        if (data < node.data) {
          removeNode (node.left, data);
          return node;
        }
        else if (data > node.data) {
          removeNode (node.right, data);
          return node;
        }
        else {
          if (node.left === null && node.right === null) {
            node = null;
            return node;
          }
          else if (node.left === null) {
            node = node.right;
            return node;
          }
          else if (node.right === null) {
            node = node.left;
            return node;
          }
          else {
            function minNode (node) {
              let ans;
              if (node.left === null) {
                ans = node;
              }
              else {
                minNode (node.left);
              }
              return ans;
            };
            let min = minNode (node.right);
            node.data = min.data;
            node.right = removeNode (node.right, min.data);
            return node;
          }
        }        
      }
      removeNode (this.Root, data);
    }
    // remove line with error and write your code here
  }

  min() {
    let ans;
    if (this.Root === null) {
      ans = null;
    }
    else {
      function minNode (node) {
        if (node.left === null) {
          ans = node.data;
        }
        else {
          minNode (node.left);
        }
      };
      minNode (this.Root);
    }
    return ans;
    // remove line with error and write your code here
  }

  max() {
    let ans;
    if (this.Root === null) {
      ans = null;
    }
    else {
      function maxNode (node) {
        if (node.right === null) {
          ans = node.data;
        }
        else {
          maxNode (node.right);
        }
      };
      maxNode (this.Root);
    }
    return ans;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};