function matchingSet(arr1, arr2) {
    const comparison = arr1.length < arr2.length;
    let overlap = [];

    smallerArray = comparison ? arr2 : arr1;
    largerArray = comparison ? arr1 : arr2;    
    for (let element of smallerArray) {
        largerArray.includes(element) ? overlap.push(element) : {};
    }

    unique = new Set(overlap);
    return [...unique];
}

console.log(matchingSet([1, 2, 3, 4], [3, 4, 5, 6, 7])); // [3, 4]
console.log(matchingSet(['j', 'a', 'n', 'e'], ['j', 'o', 'h', 'n', 'n', 'y'])); // ['j', 'n']
