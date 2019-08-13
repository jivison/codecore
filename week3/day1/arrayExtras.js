const arrayExtras = {
    last(array) {
        // returns the last element in an array
        return array.slice(-1)[0]; 
    },
    
    first(array) {
        // returns the last element in an array
        return array[0];
    },
    take(array, index) {
        // returns the element based of an argument
        return array[index]
    },
    toObject(array) {
        return array.reduce((acc, val) => {
            acc[val[0]] = val[1];
            return acc;
        }, {})
    },

    // find(array, fn) {
    //     for (let element of array) {
    //         if (fn(element)) {
    //             return element
    //         }
    //     }
    // }
}


let testArray = [0, 1, 2, 3, 4, 5, 6];
multiDArray = [["a", 1], ["b", 2], ["c", 3]];

// console.log(arrayExtras.last(testArray));
// console.log(arrayExtras.first(testArray));
// console.log(arrayExtras.take(testArray, 3));
console.log(arrayExtras.toObject(multiDArray));