// Cheating
function reverse(string) {
    // Split into an array, reverse it, then join it again
    return string.split("").reverse().join("");
}

// Hard coded
function differentReverse(string) {
    result = [];
    for (let char of string) {
        result.unshift(char);
    }
    return result.join("");
}

// Tests
console.log(reverse("test string"));
console.log(differentReverse("test string"));