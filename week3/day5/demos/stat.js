const fs = require('fs');

fs.stat('hello.txt', (err, stat) => {
    console.log(stat);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
});