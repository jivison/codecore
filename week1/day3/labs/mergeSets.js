function mergeSet(arr1, arr2) {
    // A set contains only unique elements
    const unique = new Set(arr1.concat(arr2));
    // Expand the set into an array
    return [...unique];
}


// let array1 = [1, 2, 3];
// let array2 = [3, 4, 5];
// console.log(mergeSet(array1, array2));