const COLORS = {
    white: "\x1b[40m",
    red: "\x1b[41m",
    green: "\x1b[42m",
    yellow: "\x1b[43m",
    blue: "\x1b[44m",
    magenta: "\x1b[45m",
    cyan: "\x1b[46m",
    grey: "\x1b[47m"
};

function row(length, color1, color2) {
    let result = "";
    for (let i = 0; i < length; i++) {
        i % 2 === 0
            ? (result += `${COLORS[color1]} ${COLORS['white']}`)
            : (result += `${COLORS[color2]} ${COLORS['white']}`);
    }
    return result + "\n";
}

const args = process.argv.slice(2);

function checkerBoard() {
    let result = "";
    for (let i = 0; i < args[2]; i++) {
        let colours = (i % 2 === 0) ? [args[0], "white"] : [args[0], "white"].reverse();
        result += row(args[1], ...colours)
    }
    console.log(result);
}


checkerBoard()