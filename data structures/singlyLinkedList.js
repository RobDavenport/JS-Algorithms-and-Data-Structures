class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let node = new Node(val);

        if (!this.head) this.head = node;
        else this.tail.next = node;

        this.tail = node;
        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        
        let node = this.head;
        let newTail = node;

        while (node.next) {
            newTail = node;
            node = node.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return node;
    }

    shift() {
        if (this.length === 0)
            return undefined;

        let node = this.head;
        this.head = node.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return node;
    }

    unshift(val) {
        let node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx > this.length) return undefined;

        let node = this.head;

        for (let i = 0; i < idx; i++)
            node = node.next;
        
        return node;
    }

    set(idx, val) {
        let node = this.get(idx);
        if (node) {
            node.val = val;
            return true
        }
        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        else if (idx === this.length) this.push(val);
        else if (idx === 0) this.unshift(val);
        else {
            let node = new Node(val);
            let prev = this.get(idx - 1);
            let next = prev.next;
            prev.next = node;
            node.next = next;
            
            this.length++;
        }
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        else if (idx === this.length - 1) return this.pop();
        else if (idx === 0) return this.shift();
        
        let prev = this.get(idx - 1);
        let node = prev.next;
        prev.next = node.next;
       
        this.length--;
        return node;
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            let next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}