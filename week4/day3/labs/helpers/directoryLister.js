const fs = require("fs");

function directoryLister() {
    return fs.readdirSync("/home/john/codecore/week4/day3/labs");
}

module.exports = directoryLister;
