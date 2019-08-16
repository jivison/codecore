const rectangle = require("./modules/generateRectangle");
const readline = require("readline");

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interface.question(
    "What should the height of the rectangle be?\n> ",
    height => {
        interface.question(
            "What should the width of the rectangle be?\n> ",
            width => {
                interface.question(
                    "Which file should I write it to?\n> ",
                    filepath => {
                        rectangle.init([width, height], filepath);
                        rectangle.writeRectangle();
                    }
                );
            }
        );
    }
);
