class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);

        if (!this.root)
            this.root = node;
        else {
            let current = this.root;
            while (true) {
                if (val == current.val) return undefined;
                else if (val < current.val) {
                    if (!current.left) {
                        current.left = node;
                        break;
                    } else current = current.left;
                } else {
                    if (!current.right) {
                        current.right = node;
                        break;
                    } else current = current.right;
                }
            }
        }

        return this;
    }

    find(val) {
        let node = this.root;

        while (node != null) {
            if (node.val === val) return node;
            else if (val < node.val) node = node.left;
            else node = node.right;
        }

        return undefined;
    }

    contains(val, node = this.root) {
        if (!node) return false;
        else if (val === node.val) return true;
        else if (val < node.val) return this.contains(val, node.left);
        else return this.contains(val, node.right);
    }

    breadthFirstSearch() {
        let values = [];
        let remaining = [this.root]
        let node;

        while (remaining.length) {
            node = remaining.shift();
            values.push(node.val)

            if (node.left) remaining.push(node.left);
            if (node.right) remaining.push(node.right);
        }

        return values;
    }

    depthFirstSearchPreOrder(node = this.root) {
        let values = [];
        if (node) {
            values.push(node.val);
            if (node.left) values.push.apply(values, this.depthFirstSearchPreOrder(node.left));
            if (node.right) values.push.apply(values, this.depthFirstSearchPreOrder(node.right));
        }
        return values;
    }

    depthFirstSearchPostOrder(node = this.root) {
        let values = [];
        if (node) {
            if (node.left) values.push.apply(values, this.depthFirstSearchPostOrder(node.left));
            if (node.right) values.push.apply(values, this.depthFirstSearchPostOrder(node.right));
            values.push(node.val);
        }
        return values;
    }

    depthFirstSearchInOrder(node = this.root) {
        let values = [];
        if (node) {
            if (node.left) values.push.apply(values, this.depthFirstSearchInOrder(node.left));
            values.push(node.val);
            if (node.right) values.push.apply(values, this.depthFirstSearchInOrder(node.right));
        }
        return values;
    }
}