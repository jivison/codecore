function fizzBuzz(num1, num2) {
    let grandOutput = [];
    for (let i = 1; i <= 100; i++) {
        let output = "";

        if (i % num1 === 0) {
            output += "fizz";
        }
        if (i % num2 === 0) {
            output += "buzz";
        }

        grandOutput.push(output ? output : i);
    }
    return grandOutput;
}

module.exports = fizzBuzz;
