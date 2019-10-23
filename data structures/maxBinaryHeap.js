class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        let idx = this.values.push(val) - 1;
        let parent = Math.floor((idx - 1) / 2);
        while (this.values[idx] > this.values[parent]) {
            [this.values[idx], this.values[parent]] = [this.values[parent], this.values[idx]];
            idx = parent;
            parent = Math.floor((idx - 1) / 2);
        }
    }

    extractMax() {
        const max = this.values[0];
        const last = this.values.pop();

        if (this.values.length === 0)
            return max;

        this.values[0] = last;
        let idx = 0;

        while (true) {
            let swapIdx = 2 * idx + 1;
            let left, right;

            if (swapIdx < this.values.length)
                left = this.values[swapIdx];
            if (swapIdx + 1 < this.values.length)
                right = this.values[swapIdx + 1];

            if (left) {
                if (right && left < right) swapIdx++;
                if (last < this.values[swapIdx]) {
                    [this.values[idx], this.values[swapIdx]] = [this.values[swapIdx], this.values[idx]];
                    idx = swapIdx;
                } else break;
             } else break;
        }

        return max;
    }
}