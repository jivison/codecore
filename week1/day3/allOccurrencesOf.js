function allOccurrencesOf(char, arr) {
    let occurences = Array(arr.length).fill(0);
    for (let string_i = 0; string_i < arr.length; string_i++) {
        let string = arr[string_i];
        for (let letter of string) {
            occurences[string_i] += (letter === char) ? 1 : 0;
        }
    }
    return occurences;
}

console.log(allOccurrencesOf("l", ["hello", "world"]));
console.log(allOccurrencesOf("o", ["bob", "likes", "tea"]));