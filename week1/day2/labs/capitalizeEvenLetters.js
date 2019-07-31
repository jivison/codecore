const arg = process.argv.splice(2)

let output = "";

for (let word in arg) {
    word = arg[word]
    for (let letter in word) {
        output += ((letter % 2 === 0) ? word[letter] : word[letter].toUpperCase());
    }
    output += " ";
}

console.log(output);