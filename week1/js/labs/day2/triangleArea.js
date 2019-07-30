const sides = process.argv.splice(2, 3);

for (var side in sides) {
    sides[side] = parseInt(sides[side])
}

let shiftysides = sides;
let valid = true;

for (let side in sides) {
    if (shiftysides[0] + shiftysides[1] < shiftysides[2]) {
        valid = false
        break
    }
    shiftysides.unshift(shiftysides[2])
    shiftysides.pop()
}

if (valid) {
    const perimeter = sides.reduce((a, b) => a + b, 0), p = perimeter/2
    console.log("Perimeter: " + perimeter)
    console.log("Area: " + Math.sqrt(p * (p - sides[0]) * (p - sides[1]) * (p - sides[2])))
    

} else {
    console.log("Not a valid triangle...")
}