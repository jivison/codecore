function flatten(array) {
    return `${array}`.split(",");
}

function recursiveFlatten(array) {
    let existArrays = array.map((element) => element instanceof Array);
    if (!existArrays.includes(true)) {
        return array;
    } else {
        return recursiveFlatten(
            array.reduce((acc, val) => {
                acc = acc.concat((val instanceof Array) ? val : [val])
                return acc;
            }, [])
        );
    }
}

// returns [ 2, 3, 8, 5, 9, 4, 5, 10 ]
console.log(recursiveFlatten([[2, 3], [8, [5, 9], [4, 5]], 10]));