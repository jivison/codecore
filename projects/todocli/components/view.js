const fs = require('fs');

module.exports = (path) => {
    console.log();
    let todo = JSON.parse(fs.readFileSync(path));
    console.log(todo["items"].reduce((acc, val, idx) => {
        return acc += `${idx} ${(val['completed']) ? "[✓]" : "[]"} ${val['item']}\n`
    }, ""));
}