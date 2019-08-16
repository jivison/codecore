const fs = require("fs");

const args = process.argv.slice(2);

function deleteMarked(target, destination) {
    fs.readFile(target, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Read file successfully");
            fs.writeFile(
                destination,
                data
                    .toString()
                    .split("\n")
                    .reduce((acc, val) => {
                        acc += val.split(",")[2] === "yes" ? "" : val + "\n";
                        return acc;
                    }, "")
                    .trim(),
                err => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Success writing file");
                    }
                }
            );
        }
    });
}

// same as deleteMarked(args[0], args[1]);
deleteMarked(...args);
