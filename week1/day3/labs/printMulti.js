function printMulti(multiDiArray) {
    for (let xElement of multiDiArray) {
        for (let yElement of xElement) {
            console.log(yElement);
        }
    }
}


// Tests
const myArray = [[2,3,4], ["Hello CodeCore", 1, true]];
printMulti(myArray);


const myArray = [];
printMulti(myArray);