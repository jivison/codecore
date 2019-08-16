const readline = require("readline");

const askingInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const askQuestion = (interface, correctAnswer, acc) => {
    interface.question("> ", (answer) => {
        if (parseInt(answer) === correctAnswer) {
            console.log(`Guessed '${correctAnswer}' correctly in ${acc} attempt${(acc > 1) ? 's' : ''}!`);
            process.exit()
        } else {
            console.log("Nope. Try Again");
            askQuestion(interface, correctAnswer, acc + 1)
        }
    });
}


const masterAnswer = Math.ceil(Math.random() * 9 + 1)

console.log("Im thinking of a number between 1 and 10...");
askQuestion(askingInterface, masterAnswer, 1) 