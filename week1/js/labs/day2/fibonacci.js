const arg = process.argv[2];

let sequence = [1];

for (let i = 0; i < arg - 1; i++) {
    sequence.push(sequence.slice(-2).reduce((a, b) => a + b, 0));
}

console.log(sequence);