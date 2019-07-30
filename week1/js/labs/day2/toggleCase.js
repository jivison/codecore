const arg = process.argv[2];

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let result = "";

for (let letter of arg) {
    if (upper.includes(letter)) {
        result += letter.toLowerCase();
    } else {
        result += letter.toUpperCase();
    }
}

console.log(result);