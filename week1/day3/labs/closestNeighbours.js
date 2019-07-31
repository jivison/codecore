function largestNumber(array) {
    return Math.max(...array)
}

function closestNeighbors(n, a, b, c) {
    let answers = [];
    for (i = n - 1; i > 0; i--) {
        let numbers = [];

        if (i % a === 0 && i % b === 0 && i % c === 0) {
            numbers.push(i); 
        }
        if (numbers.length > 0) {
            answers.push(largestNumber(numbers));
            break
        }
    }
    //                    really big number
    for (i = n + 1; i < 10000000000000; i++) {
        let numbers2 = [];

        if (i % a === 0 && i % b === 0 && i % c === 0) {
            numbers2.push(i); 
        }
        if (numbers2.length > 0) {
            answers.push(largestNumber(numbers2));
            break
        }
    }
    return answers;
}


console.log(closestNeighbors(20, 2, 3, 4)); // [12, 24]
console.log(closestNeighbors(100, 3, 4, 5)); // [60, 120]
console.log(closestNeighbors(3000, 7, 13, 31)); // returns [2821, 5642]
