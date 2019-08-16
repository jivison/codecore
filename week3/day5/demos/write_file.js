const fs = require('fs');

const myText = "Hello, world!";

fs.writeFile("hello.txt", myText, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File hello.txt created");
    }
});