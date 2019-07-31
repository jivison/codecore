function isHomogenous(arr) {
    const baseType = arr[0].constructor.name;
    for (let element of arr) {
        if (element.constructor.name !== baseType) {
            return false;
        }
    }   
    return true;
}

console.log(isHomogenous([1, 2, 3])); // true
console.log(isHomogenous(['a', 'b', 'c'])); // true
console.log(isHomogenous([[2], 'Xavier']));// false
console.log(isHomogenous([[2], {colour: 'blue'}]));// false
console.log(isHomogenous([1, '2', 3]));// false
