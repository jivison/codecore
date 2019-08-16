// Project criteria:
// http://codecore.certified.in/learning_modules/todo-cli-week-3-8/submissions

const menu = require("./components/menu");
const view = require("./components/view");
const newItem = require("./components/newItem");

/*
Format: 
    "items" : [
        {
            "item" : <title>,
            "completed" : <true/false>
        }
    ]
*/
const filepath = "data/todo.json";

const quit = () => {
    console.log("Goodbye!");
    process.exit();
};

const commands = {
    // 'shortcut' : {command : 'command', commandFunction : () => {fn()}
    v: { command: "View", commandFunction: view },
    n: { command: "New", commandFunction: newItem },
    // cX: { command: "Complete", commandFunction: complete },
    // dX: { command: "Delete", commandFunction: deleteItem },
    q: { command: "Quit", commandFunction: quit }
};

menu(commands, filepath, true);
