class ListNode {
    constructor(prev, data, next){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoubleLinkedList {    
    constructor(data){
        this.head = data;
        this.tail = this.head;
        this.length = 1;
    }

    linkLast(data){
        console.log('add last');
        const l = this.tail;
        const newNode = new ListNode(l, data, null);
        this.tail = newNode;
        if(l == null){
            this.head = newNode;
        }else {
            l.next = newNode;
        }
        this.length++;
        console.log(this);
    }

    linkFirst(data){
        console.log('add first');
        const f = this.head;
        const newNode = new ListNode(null, data, f);
        this.head = newNode;
        if(f === null){
            this.tail = newNode;
        }else{
            f.prev = newNode;
        }
        this.length++;
        console.log(this);
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

    toGraph(){
        let arr = [];
        let current = this.head;
        while(current !== null){
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
}

let list = new DoubleLinkedList(new ListNode(null,10, null));

class Song{
    constructor(title, duration){
        this.title = title;
        this.duration = duration;
    }

    toString(){
        return this.title + ' ' + this.duration;
    }
}

class Album{
    
}
