// const add = function (a, b){
//     return a + b;
// }

// const sum = add;


function sayHi() {
    return "Hi";
}

function fnAccepter(fn) {
    console.log(fn());
}

// function add(a, b) {
//     const total = a + b;
//     return total;
// }

// function fnReturner() {
//     return add;
// }

// const adder = fnReturner();
// console.log(adder === add);
// console.log(adder(4, 3));

const bark = (name, sound="woof!") =>
    `${name} barks ${sound}`;

// console.log(bark("dog"));

const add = (a, b) => a + b;
const flip = (fn) => (a, b) => fn(b, a);
const V = (x) => (y) => (z) => z(x)(y);

let arr = [4, 5, 61, 12, 25, 7, 23, 62, 1];

arr.sort((a, b) => a - b);
console.log(arr);
