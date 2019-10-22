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

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];

        for (var j = i - 1; j >= 0 && current < arr[j] ; j--)
            arr[j+1] = arr[j];

        arr[j+1] = current;
    }

    return arr;
}

const merge = (left, right) => {
    let result = [];
    for (var i = 0, j = 0; i < left.length > 0 && j < right.length >> 0;) {
        if (left[i] < right[j])
            result.push(left[i++]);
        else
            result.push(right[j++]);
    }

    if (i < left.length)
        result.push(left.slice(i));
    else if (j < right.length)
        result.push(right.slice(j));

    return result;
}

const mergeSort = (arr) => {
    if (arr.length <= 1) 
        return arr;

    let mid = Math.floor(arr.length / 2);

    return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

const quickSort = (arr) => {
    //todo

    return arr;
}

const radixSort = (arr) => {
    //todo

    return arr;
}

//HELPER FUNCTIONS
const generateArray = (length, max) => {
    return Array.from({ length }, () => Math.floor(Math.random() * max))
}

const doSort = (sortFunc, algoName, arr) => {
    console.log(algoName + ": ");
    console.log("Unsorted: " + arr);
    console.log("Sorted: " + sortFunc(arr));
    console.log("----------");
}

//TESTING CODE

// doSort(bubbleSort, 'Bubble Sort', generateArray(30, 100));
// doSort(selectionSort, 'Selection Sort', generateArray(30, 100));
// doSort(insertionSort, 'Insertion Sort', generateArray(30, 100));
// doSort(mergeSort, 'Merge Sort', generateArray(30, 100));
doSort(quickSort, 'Quick Sort', generateArray(30, 100));
// doSort(radixSort, 'Radix Sort', generateArray(30, 1000));