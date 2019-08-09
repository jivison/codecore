function reduce(array, fn, initVal) {
    let prev = initVal
    array.forEach(element => {
        prev = fn(prev, element)
    });
    return prev;
}

const plus = (a, b) => a + b;
const numbers = [1, 2, 3, 4, 5];

console.log(reduce(numbers, plus, 0)); // 15
console.log(reduce(numbers, (a, b) => a * b, 1)); // 120
