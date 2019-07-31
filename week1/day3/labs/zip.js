function zip(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return undefined;
    }

    let finalarray = [];

    for (let i = 0; i < arr1.length; i++) {
        finalarray.push([arr1[i], arr2[i]]);
    }
    return finalarray;
}

console.log(zip([1, 2, 3], [4, 5, 6])); // [[1, 4], [2, 5], [3, 6]]
console.log(zip(['firstName', 'lastName'], ['Jon', 'Snow'])); // [['firstName', 'Jon'], ['lastName', 'Snow']]
console.log(zip([0, 0, 0], [])); // undefined
console.log(zip(['x', 'y', 'z'], [5, 6, 10])); // [['x', 5], ['y', 6], ['z', 10]]
