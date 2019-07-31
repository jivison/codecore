function findDuplicates(array) {    
    let duplicates = []
    for (let i = 0; i < array.length; i++) {
        let copy = [...array];
        copy.splice(i);
        (copy.includes(array[i])) ? duplicates.push(array[i]) : {};
    }
    return duplicates;
}

console.log(findDuplicates([1, 9, 1, 3, 4, 5, 6, 7, 8, 9])); // returns [1, 9]
console.log(findDuplicates(['Bob', 'bob', 'Rob', 'Rob', 1, 2, 3, 4, 4])); // returns ['Rob', 4]
