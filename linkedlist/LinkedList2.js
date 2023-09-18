class ListNode {
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {    
    constructor(data){
        this.head = data;
        this.tail = this.head;
        this.length = 1;
    }

    linkLast(data){
        const l = this.tail;
        const newNode = new ListNode( data, null);
        this.tail = newNode;
        if(l == null){
            this.head = newNode;
        }else {
            l.next = newNode;
        }
        this.length++;
    }

    linkFirst(data){
        const f = this.head;
        const newNode = new ListNode( data, f);
        this.head = newNode;
        if(f === null){
            this.tail = newNode;
        }
        this.length++;
    }

    unlinkFirst(e){
        const element = e.data;
        const next = e.next;
        e.data = null;
        e.next = null;
        this.head = next;
        if(next === null){
            this.tail = null;
        }
        this.length--;
        return element;
    }

    removeFirst(){
        const f = this.head;
        if(f === null)
            console.log('No elements');
        return this.unlinkFirst(f);
    }



    toArray(){
        let arr = [];
        let current = this.head;
        while(current !== null){
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}

let list = new LinkedList(new ListNode(10, null));
list.linkLast(15);
list.linkFirst(2)
list.linkLast(20)
console.log('list: ', list.toArray());
console.log('remove ', list.removeFirst());
console.log('list: ', list.toArray());
