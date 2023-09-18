class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = {
            value: value,
            next: null,
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        const newNode = {
            value: value,
            next: null,
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }
        let counter = 0;
        let currentNode = this.head;
        while(currentNode.next !== null && counter < index){
            if(counter === index){
                const newNode = {
                    value: value,
                    next: null,
                }
                let leader = currentNode.next;
                let pointer = leader.next;
                leader.next = newNode;
                newNode = pointer;
                this.length++;
                return this.printList();

            }else{
                currentNode = currentNode.next;
            }
            counter++;
            
        }
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode.next !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(16);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2,12)
console.log(myLinkedList.printList());