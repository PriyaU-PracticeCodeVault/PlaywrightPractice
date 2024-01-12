console.log("Find minimum and maximum of array");
console.log("*********************************");


function findMinMaxIndexes(array) {
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
        }
        if (array[i] > array[maxIndex]) {
            maxIndex = i;
        }
    }

    return { minIndex, maxIndex };
}

// Example usage
const array = [34, 7, 21, 89, 54, 10, 91, 67];
const indexes = findMinMaxIndexes(array);

console.log(`Minimum value: ${array[indexes.minIndex]} at index ${indexes.minIndex}`);
console.log(`Maximum value: ${array[indexes.maxIndex]} at index ${indexes.maxIndex}`);