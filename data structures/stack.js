class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);

        if (this.size === 0)
            this.top = node;
        else {
            let next = this.top;
            node.next = next;
            this.top = node;
        }

        return ++this.size;
    }

    pop() {
        if (this.size === 0) return undefined;

        let node = this.top;

        if (this.size === 1) 
            this.top = null;
        else 
            this.top = node.next;

        return --node.val;
    }
}