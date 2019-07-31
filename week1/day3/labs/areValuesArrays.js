function areValuesArrays(arr) {
    for (let element of arr) {
        if (!Array.isArray(element)) {
            return false;
        }
    }
    return true;
}


// Tests
console.log(areValuesArrays([[1], [2], [4, 5]])); // returns true
console.log(areValuesArrays([1, [2], [6, 7, 8]])); // returns false
console.log(areValuesArrays([[1], 2, [6, 7, 8]])); // returns false
console.log(areValuesArrays(['true', 'false'])); // returns false
