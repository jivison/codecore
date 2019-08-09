function factorial(n) {
    return (n === 0) ? 1 : n * factorial(n - 1);
}

console.log(factorial(120));



// 5!
// 4! * 5
// 3! * 4 * 5
// etc...

