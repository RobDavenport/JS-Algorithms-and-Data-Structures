//Bubble Sort
const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        let swap = false;

        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }

        if (!swap)
            break;
    }

    return arr;
}
//End Bubble Sort

//Selection Sort
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowIdx])
                lowIdx = j;
        }

        if (i !== lowIdx)
            [arr[lowIdx], arr[i]] = [arr[i], arr[lowIdx]];
    }

    return arr;
}
//End Selection Sort

//Insertion Sort
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        for (var j = i - 1; j >= 0 && current < arr[j]; j--)
            arr[j + 1] = arr[j];

        arr[j + 1] = current;
    }

    return arr;
}
//End Insertion Sort

//Merge Sort
const merge = (left, right) => {
    let result = [];
    for (var i = 0, j = 0; i < left.length > 0 && j < right.length >> 0;) {
        if (left[i] < right[j])
            result.push(left[i++]);
        else
            result.push(right[j++]);
    }

    if (i < left.length)
        result.push(...left.slice(i));
    else if (j < right.length)
        result.push(...right.slice(j));

    return result;
}

const mergeSort = (arr) => {
    if (arr.length <= 1)
        return arr;

    let mid = Math.floor(arr.length / 2);

    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
//End Merge Sort

//Quick Sort
const pivot = (arr, start = 0, end = arr.length - 1) => {
    let val = arr[start];
    let idx = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < val) {
            idx++;
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }

    [arr[start], arr[idx]] = [arr[idx], arr[start]];
    return idx;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let idx = pivot(arr, left, right);
        quickSort(arr, left, idx - 1);
        quickSort(arr, idx + 1, right);
    }

    return arr;
}
//End Quick Sort

//Radix Sort
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const digitcount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const radixSort = (arr) => {
    let max = 0;

    for (let i = 0; i < arr.length; i++)
        max = Math.max(max, digitcount(arr[i]));

    for (let c = 0; c < max; c++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < arr.length; i++) {
            let val = arr[i];
            buckets[getDigit(val, c)].push(val);
        }

        arr = [].concat(...buckets);
    }

    return arr;
}
//End Radix Sort

//Helper / Testing Functions
const generateArray = (length, max) => {
    return Array.from({ length }, () => Math.floor(Math.random() * max))
}

const doSort = (sortFunc, algoName, arr) => {
    console.log(algoName + ": ");
    console.log("Unsorted: " + arr);
    console.log("Sorted: " + sortFunc(arr));
    console.log("----------");
}

//Test Code
doSort(bubbleSort, 'Bubble Sort', generateArray(30, 100));
doSort(selectionSort, 'Selection Sort', generateArray(30, 100));
doSort(insertionSort, 'Insertion Sort', generateArray(30, 100));
doSort(mergeSort, 'Merge Sort', generateArray(30, 100));
doSort(quickSort, 'Quick Sort', generateArray(30, 100));
doSort(radixSort, 'Radix Sort', generateArray(30, 9999));