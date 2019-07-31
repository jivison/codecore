function isEven(number) {
    return ["0", "2", "4", "6", "8"].includes(String(number)[String(number).length - 1]);
}

function binaryIsEven(number) {
    const binary = (number).toString(2);
    return binary[binary.length - 1] === "0" ? true : false;  
}

console.log(bitwiseIsEven(2));
console.log(bitwiseIsEven(100));
console.log(bitwiseIsEven(12));
console.log(bitwiseIsEven(-15));
console.log(bitwiseIsEven(0));

