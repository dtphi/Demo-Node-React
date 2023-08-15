// BstNode class
class BstNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// Binary Search tree class
class BinarySearchTree {
    constructor() {
        // root of a binary search tree
        this.root = null;
    }

    // function to be implemented
    // helper method which creates a new BstNode to
    // be inserted and calls insertBstNode
    insert(data) {
        // Creating a BstNode and initialising
        // with data
        var newBstNode = new BstNode(data);

        // root is null then BstNode will
        // be added to the tree and made root.
        if (this.root === null)
            this.root = newBstNode;
        else

            // find the correct position in the
            // tree and add the BstNode
            this.insertBstNode(this.root, newBstNode);
    }

    // Method to insert a BstNode in a tree
    // it moves over the tree to find the location
    // to insert a BstNode with a given data
    insertBstNode(BstNode, newBstNode) {
        // if the data is less than the BstNode
        // data move left of the tree
        if (newBstNode.data < BstNode.data) {
            // if left is null insert BstNode here
            if (BstNode.left === null)
                BstNode.left = newBstNode;
            else

                // if left is not null recur until
                // null is found
                this.insertBstNode(BstNode.left, newBstNode);
        }

        // if the data is more than the BstNode
        // data move right of the tree
        else {
            // if right is null insert BstNode here
            if (BstNode.right === null)
                BstNode.right = newBstNode;
            else

                // if right is not null recur until
                // null is found
                this.insertBstNode(BstNode.right, newBstNode);
        }
    }

    // helper method that calls the
    // removeBstNode with a given data
    remove(data) {
        // root is re-initialized with
        // root of a modified tree.
        this.root = this.removeBstNode(this.root, data);
    }

    // Method to remove BstNode with a
    // given data
    // it recur over the tree to find the
    // data and removes it
    removeBstNode(BstNode, key) {

        // if the root is null then tree is
        // empty
        if (BstNode === null)
            return null;

        // if data to be delete is less than
        // roots data then move to left subtree
        else if (key < BstNode.data) {
            BstNode.left = this.removeBstNode(BstNode.left, key);
            return BstNode;
        }

        // if data to be delete is greater than
        // roots data then move to right subtree
        else if (key > BstNode.data) {
            BstNode.right = this.removeBstNode(BstNode.right, key);
            return BstNode;
        }

        // if data is similar to the root's data
        // then delete this BstNode
        else {
            // deleting BstNode with no children
            if (BstNode.left === null && BstNode.right === null) {
                BstNode = null;
                return BstNode;
            }

            // deleting BstNode with one children
            if (BstNode.left === null) {
                BstNode = BstNode.right;
                return BstNode;
            }

            else if (BstNode.right === null) {
                BstNode = BstNode.left;
                return BstNode;
            }

            // Deleting BstNode with two children
            // minimum BstNode of the right subtree
            // is stored in aux
            var aux = this.findMinBstNode(BstNode.right);
            BstNode.data = aux.data;

            BstNode.right = this.removeBstNode(BstNode.right, aux.data);
            return BstNode;
        }

    }




    // finds the minimum BstNode in tree
    // searching starts from given BstNode
    findMinBstNode(BstNode) {
        // if left of a BstNode is null
        // then it must be minimum BstNode
        if (BstNode.left === null)
            return BstNode;
        else
            return this.findMinBstNode(BstNode.left);
    }


    // returns root of the tree
    getRootBstNode() {
        return this.root;
    }


    // Performs inorder traversal of a tree
    inorder(BstNode) {
        if (BstNode !== null) {
            this.inorder(BstNode.left);
            console.log(BstNode.data);
            this.inorder(BstNode.right);
        }
    }

    // Performs preorder traversal of a tree
    preorder(BstNode) {
        if (BstNode !== null) {
            console.log(BstNode.data);
            this.preorder(BstNode.left);
            this.preorder(BstNode.right);
        }
    }


    // Performs postorder traversal of a tree
    postorder(BstNode) {
        if (BstNode !== null) {
            this.postorder(BstNode.left);
            this.postorder(BstNode.right);
            console.log(BstNode.data);
        }
    }


    // search for a BstNode with given data
    search(BstNode, data) {
        // if trees is empty return null
        if (BstNode === null)
            return null;

        // if data is less than BstNode's data
        // move left
        else if (data < BstNode.data)
            return this.search(BstNode.left, data);

        // if data is more than BstNode's data
        // move right
        else if (data > BstNode.data)
            return this.search(BstNode.right, data);

        // if data is equal to the BstNode data
        // return BstNode
        else
            return BstNode;
    }


}
//debugger
// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting BstNodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//        15
//      /   \
//     10    25
//     / \   / \
//    7   13 22 27
// / \  /
// 5 9 17

var root = BST.getRootBstNode();

// prints 5 7 9 10 13 15 17 22 25 27
console.log("Initial tree: ");
BST.inorder(root);

// Removing BstNode with no children
BST.remove(5);

//        15
//      /   \
//     10    25
//     / \   / \
//    7   13 22 27
//   \  /
//   9 17

var root = BST.getRootBstNode();

console.log("Tree after removing 5: ");
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing BstNode with one child
BST.remove(7);

//         15
//         / \
//     10 25
//     / \ / \
//     9 13 22 27
//         /
//         17


var root = BST.getRootBstNode();

console.log("Tree after removing 7: ");
// prints 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing BstNode with two children
BST.remove(15);

//         17
//         / \
//     10 25
//     / \ / \
//     9 13 22 27

var root = BST.getRootBstNode();
console.log("Inorder traversal: ");
// prints 9 10 13 17 22 25 27
BST.inorder(root);

console.log("Postorder traversal: ");
BST.postorder(root);

console.log("Preorder traversal: ");
BST.preorder(root);