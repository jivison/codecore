const nums = process.argv.splice(2, 2)

for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % nums[0] === 0) {output += "fizz";} 
    if (i % nums[1] === 0) {output += "buzz";}
    
    console.log(output ? output : i);
}