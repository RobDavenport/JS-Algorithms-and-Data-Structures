class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        let node = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
        }

        this.length--;

        return node;
    }

    shift() {
        if (this.length === 0) return undefined;

        let node = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }

        this.length--;

        return node;
    }

    unshift(val) {
        let node = new Node(val);

        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return undefined;

        let node;
        if (idx < this.length / 2) {
            node = this.head;
            for (let i = 0; i < idx; i++)
                node = node.next;
        } else {
            node = this.tail;
            for (let i = this.length - 1; i > idx; i--)
                node = node.prev;
        }

        return node;
    }

    set(idx, val) {
        let node = this.get(idx);
        if (node) {
            node.val = val;
            return true;
        }
        return false;
    }

    insert(idx, val) {
        if (idx < 0 || idx >= this.length) return false;
        else if (idx === 0) unshift(val);
        else if (idx === this.length) push(val);
        else {
            let node = new Node(val);
            let next = this.get(idx);
            let prev = next.prev;

            node.next = next;
            node.prev = prev;

            prev.next = node;
            next.prev = node;
            this.length++;
        }
        return true;
    }

    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        else if (idx === 0) return this.shift();
        else if (idx === this.length - 1) return this.pop();
        else {
            let node = this.get(idx);
            let next = node.next;
            let prev = node.prev;

            prev.next = next;
            next.prev = prev;

            node.next = null;
            node.prev = null;

            this.length--;
            return node;
        }
    }
}