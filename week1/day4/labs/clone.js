function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const real = {name : "John", age : 17, currentResidence : "Vancouver"}
const imposter = clone(real);

console.log(imposter);
