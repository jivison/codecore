function add(a, b) {
    return a + b;
}

// Arrays can hold functions as well as any other type
let myArray = ["a", true, 123, add, null]
console.log(myArray) // ['a', true, 123, [Function: add]]

// These function can be called with brackets
myArray[3](3, 4); // 7


//------------------------------// 
// Non-mutating Array operators //
//------------------------------//

// Length
myArray.length; // 5

// Last element
myArray[myArray.length - 1]; // null

// Concatenate arrays
["test", "array"].concat(myArray); // ["test", "array", "a", true, 123, add, null] 

// Can also be used to clone an array
myArray.concat([]); // ["a", true, 123, add, null]

// Extract parts of an array from another
myArray.slice(1, 2); //[true, 123]

// Join arrays 
myArray.join("|"); // 'a, true, 123, function add(a, b) {\n    return a + b;\n}, '

//--------------------------// 
// mutating Array operators //
//--------------------------//

// Negative numbers can be used to set elements in arrays
myArray[-1] = "how is this possible";
console.log(myArray); // [ 'a', true, 123, [Function: add], null,'-1': 'how is this possible']

// Numbers higher than the length can stil be used
myArray[50] = "far away" 
console.log(myArray); // ['a', true, 123, [Function: add], null, <45 empty items>, 'far away', '-1': 'how is this possible']

// Removes the first element
myArray.shift() // 'a'

// Removes the last element
myArray.pop() // 'far away'

// Prepends an element
myArray.unshift("element") // 50 (the new length of the array)

//-----------------------// 
// Iterating over arrays //
//-----------------------//

