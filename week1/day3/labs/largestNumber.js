function largestNumber(array) {
    let max = -Infinity;
    for (let element of array) {
        if (element > max) {
            max = element
        }
    }
    return max
}

function differentLargestNumber(array) {
    return Math.max(...array)
}





// Tests
console.log(largestNumber([40, 2, 13, 34, 42]));
console.log(largestNumber([1, 2, 3, 4, 5, 6]));
console.log(largestNumber([99, 77, 55, 33, 22, 11]));