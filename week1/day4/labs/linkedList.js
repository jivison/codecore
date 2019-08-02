function listToArr(linkedList) {
    let persistantElement = JSON.parse(JSON.stringify(linkedList));
    let result = [];
    while (persistantElement) {
        result.push(persistantElement.value);
        persistantElement = persistantElement.next;
    }
    return result;
}

function arrToList(array) {
    return JSON.parse((array.reverse().reduce((acc, value) => {
        acc = `{"value" : ${value}, "next" : ${acc}}`
        // acc = {"value": value, "next" : acc};
        return acc;
    }, null)));
}

console.log(arrToList([1, 2, 3, 4]));