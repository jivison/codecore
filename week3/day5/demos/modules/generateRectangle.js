const fs = require("fs");

const rectangleObj = {
    init(args, filepath) {
        this.args = args
        this.filepath = filepath
    },

    writeRectangle() {
        fs.writeFile(
            this.filepath,
            ("*".repeat(this.args[0]) + "\n").repeat(this.args[1]),
            err => {
                if (err) {
                    console.log("Error writing file");
                } else {
                    console.log(
                        `Wrote file '${this.filepath}' with ${this.args[0] *
                            this.args[1]} asterisks`
                    );
                }
            }
        );
    },

    writeFromCLI(args) {
        this.init(args, `${args[0]}_by_${args[1]}`)
        this.writeRectangle()
    }
};

module.exports = rectangleObj;