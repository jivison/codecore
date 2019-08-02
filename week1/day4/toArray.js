function toArray(obj) {
    let result = []
    for (let key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}

function reduceToArray(obj) {
    return Object.keys(obj).reduce((acc, value) => {acc.push([value, obj[value]]);return acc}, []);
}

console.log(reduceToArray({ a : 1, b : 2, c : 3}));
