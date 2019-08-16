const fs = require("fs");

fs.readdir("./", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data.forEach(element => {
            console.log(`> ${element}`);
        });
    }
});
