function merge(objA, objB) {
    const result = JSON.parse(JSON.stringify(objA));
    for (let key in objB) {
        result[key] = objB[key];
    }
    return result;
}

function reducedMerge(objA, objB) {
  return Object.keys(objA).reduce((acc, value) => {acc[value] = objA[value];Object.keys(objB).forEach((element) => {acc[element] = objB[element]});return acc;}, {})
}

console.log(reducedMerge({ a: 1, b: 2 }, { c: 3, d: 4 })); // return {a: 1, b: 2, c: 3, d: 4}
// with shared keys
console.log(
    reducedMerge(
        { firstName: "Ron", lastName: "Wesley", occupation: "Wizard" },
        { firstName: "Harry", lastName: "Potter" }
    )
); // returns {firstName: 'Harry', lastName: 'Potter', occupation: 'Wizard'}
