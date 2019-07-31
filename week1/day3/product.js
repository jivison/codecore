function product(array) {
    let product = 1;
    for (let element of array) {
        product *= (typeof(element) === "number") ? element : 1;
    }
    return product;
}

console.log(product([2, 2, "A", 2]));