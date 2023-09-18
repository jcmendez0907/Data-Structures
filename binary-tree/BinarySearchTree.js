class Node {
    constructor(value){
        this.left = null;
        this.rigth = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }else{
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    //left
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }else {
                    //right
                    if(!currentNode.rigth){
                        currentNode.rigth = newNode;
                        return this;
                    }
                    currentNode = currentNode.rigth;
                }
            }
        }

    }
    lookup(value){
        if(!this.root){
            return null;
        }
        let currentNode = this.root;
        while(currentNode){
            if(value === currentNode.value){
                return currentNode;
            }else{
                if(value < currentNode.value){
                    currentNode = currentNode.left;
                } else{
                    currentNode = currentNode.rigth;
                }
            }
        }
        return null;

    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

const result = JSON.stringify(traverse(tree.root));
console.log(result);

const found = tree.lookup(20);
console.log(' found : ', found);

function traverse(node){
    const tree = {value: node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.rigth = node.rigth === null ? null : traverse(node.rigth);
    return tree;
}