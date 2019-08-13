const recursiveMap = (array, fn) => (array.length === 0) ? array : [fn(array.splice(-1, 1)[0])].concat(recursiveMap(array, fn));

function recursiveMap2 (array, fn) {
    if (array.length === 0) {
        return array;
    } else {
        return [fn(array.splice(-1, 1)[0])].concat(recursiveMap(array, fn))
    }
}

const even = n => n % 2 === 0;
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(recursiveMap2(numbers, even)); // [false, true, false, true, false, true]
console.log(recursiveMap(numbers, even)); // [false, true, false, true, false, true]


