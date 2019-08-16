const readline = require('readline');

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//#region
interface.question("What did you have for breakfast?\n", (answer) => {
    console.log(`Eeeww!! I hate ${answer}`);
    process.exit()
});