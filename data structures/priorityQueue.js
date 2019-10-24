class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

//Low number = high priority aka min binary heap
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);
        let idx = this.values.push(node) - 1;
        let parent = Math.floor((idx - 1) / 2);

        while (parent >= 0 && this.values[idx].priority < this.values[parent].priority) {
            [this.values[idx], this.values[parent]] = [this.values[parent], this.values[idx]];
            idx = parent;
            parent = Math.floor((idx - 1) / 2);
        }
    }

    dequeue() {
        const node = this.values[0];
        const last = this.values.pop();

        if (this.values.length === 0)
            return node;

        this.values[0] = last;
        let idx = 0;

        while (true) {
            let swapIdx = 2 * idx + 1;
            let left, right;

            if (swapIdx < this.values.length)
                left = this.values[swapIdx].priority;
            if (swapIdx + 1 < this.values.length)
                right = this.values[swapIdx + 1].priority;

            if (left) {
                if (right && left > right) swapIdx++;
                if (last.priority > this.values[swapIdx].priority) {
                    [this.values[idx], this.values[swapIdx]] = [this.values[swapIdx], this.values[idx]];
                    idx = swapIdx;
                } else break;
            } else break;
        }

        return node;
    }
}