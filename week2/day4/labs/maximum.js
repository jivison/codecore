const maximum = (arr) => arr.reduce((acc, val) => acc = (val > acc) ? val : acc, -Infinity);


const recursiveMax = (arr) => (arr.length === 0) ? arr : (arr[0] >= arr[1]) ? arr.pop(1) : arr.pop(0);


bigArray = [...Array(100000000).keys()];

console.time("Iterative");
console.log(maximum(bigArray));
console.timeEnd("Iterative");

console.time("Recursive");
console.log(recursiveMax(bigArray));
console.timeEnd("Recursive");