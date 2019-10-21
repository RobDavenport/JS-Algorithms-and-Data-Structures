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

const mergeSort = (arr) => {
    //todo

    return arr;
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
// doSort(quickSort, 'Quick Sort', generateArray(30, 100));
// doSort(radixSort, 'Radix Sort', generateArray(30, 1000));