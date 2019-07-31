function product(array) {
    let sum = 0;
    for (let element of array) {
        sum += (typeof(element) === "number") ? element : 0;
    }
    return sum;
}

console.log(product([1, 2, 3, "string", 1]));