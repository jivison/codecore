function add(a, b) {
    const total = a + b;

    return total;
}

// Extra arguments are ignored
add(4, 5, 6); // 9

// Not passed arguments are undefined
add(4); // NaN
add(); // NaN

// Functions are treated as another tpye, they can be passed and set as variables
add; // [Function: add]

// You can define functions as a variable
const add = function(a, b) {
    const total = a + b;

    return total;
}
