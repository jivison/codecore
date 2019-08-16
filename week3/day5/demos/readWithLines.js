const fs = require('fs');

const args = process.argv.slice(2);

fs.readFile(args[0], (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let count = 1
        for (let line of data.toString().split("\n")) {
            console.log(`${count}| ${line}`);
            count += 1;
        }
    }
});