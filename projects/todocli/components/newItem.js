const fs = require("fs");
const readline = require("readline");

module.exports = path => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let todo = JSON.parse(fs.readFileSync(path));

    rl.question("What task do you want to add?\n> ", answer => {
        todo["items"].push({ item: answer, completed: false });
        fs.writeFileSync(path, JSON.stringify(todo));
        menu()
    });
};
