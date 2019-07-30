args = process.argv.splice(2, 2)

let resultArray = []

for (let i = 0; i < args[0]; i++) {
    resultArray.push(Math.floor(Math.random() * args[1]) + 1)
}

for (let result of resultArray) {
    console.log(`Rolled: ${result}`)
}

sum = resultArray.reduce((a, b) => a + b, 0)
console.log(`-----------------------------\nAverage Roll: ${sum/resultArray.length}\nSum: ${sum}`)