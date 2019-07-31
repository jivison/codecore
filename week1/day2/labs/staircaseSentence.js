args = process.argv.splice(2, 2);
args[1] = parseInt(args[1]);

let numSpaces = 0;

for (let word of args[0].split(" ")) {

    if (numSpaces !== 0) {
        spaces = " ".repeat(args[1]) + "|";
        console.log(spaces.repeat(numSpaces - 1) + " ".repeat(args[1]) + word);
    } 
    else {
        console.log(word);
    }

    if (word.substr(-1) === ".") {
        numSpaces = 0;
    } else {
        numSpaces += 1;
    }
}