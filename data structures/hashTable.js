class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++)
            total = (total * PRIME + key[i].charCodeAt(0)) % this.keyMap.length;
        return total;
    }

    set(key, value) {
        const idx = this._hash(key);
        if (!this.keyMap[idx]) this.keyMap[idx] = [];
        this.keyMap[idx].push([key, value])
    }

    get(key) {
        const idx = this._hash(key);
        if (this.keyMap[idx]) {
            for (let i = 0; i < this.keyMap[idx].length; i++)
                if (this.keyMap[idx][i][0] === key)
                    return this.keyMap[idx][i][1];
        } return undefined;
    }

    keys() {
        let result = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; i++) {
                    result.push(this.keyMap[i][j][0]);
                }
            }
        }
        return result;
    }

    values() {
        let result = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; i++) {
                    let val = this.keyMap[i][j][1];
                    if (!result.includes(val))
                        result.push(val);
                }
            }
        }
        return result;
    }
}