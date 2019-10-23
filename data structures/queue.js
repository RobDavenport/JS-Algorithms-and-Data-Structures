class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let node = new Node(val);

        if (this.size === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        return ++this.size;
    }

    dequeue() {
        if (this.size === 0) return undefined;
        let node = this.first;

        if (this.size === 1)
            this.last = null;
        else
            this.first = this.first.next;
            
        --this.size;
        return node.val;
    }
}