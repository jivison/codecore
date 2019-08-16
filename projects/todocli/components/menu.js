const readline = require("readline");

module.exports = function (commands, path, startup=false) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    if (startup) {console.log(`\nWelcome to Todo CLI!\n--------------------`);}
    menu(commands, path, rl);
}


function menu(commands, path, rlInterface) {
    let help = []
    for (let key in commands) {
        help.push(`(${key}) ${commands[key]['command']}`)
    }
    console.log(help.join(" • "));

    rlInterface.question("> ", (answer) => {
        if (Object.keys(commands).includes(answer)) {
            commands[answer]["commandFunction"](path);
            menu(commands, path, rlInterface);
        } else {
            console.log(`Command '${answer}' not found.`);
            menu(commands, path, rlInterface);
        }
    })
}