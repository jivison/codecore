const numRows = process.argv[2];

let result = ""

for (let i = 1; i <= numRows; i++) {
    result += (" ".repeat(numRows - i) + "# ".repeat(i) + "\n"); 
}

console.log(result.trimRight());
