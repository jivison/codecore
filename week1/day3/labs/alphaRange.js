function alphaRange(start, end, step = 1) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    letters = (letters.indexOf(start) > letters.indexOf(end)) ? letters.split("").reverse().join("") : letters;
    result = [];
    for (let i = letters.indexOf(start); i < letters.indexOf(end) + 1; i+= step) {
        result.push(letters[i]);
    }
    
    return result;
}


console.log(alphaRange('a', 'f')); // returns ['a', 'b', 'c', 'd', 'e', 'f']
console.log(alphaRange('d', 'h')); // returns ['d', 'e', 'f', 'g', 'h']
console.log("\nStretch 1")
console.log(alphaRange('f', 'b')); // returns ['f', 'e', 'd', 'c', 'b']
console.log("\nStretch 2")
console.log(alphaRange('a', 'k', 3)); // returns ['a', 'd', 'g', 'j']
console.log(alphaRange('z', 't', 2)); // returns ['z', 'x', 'v', 't']

