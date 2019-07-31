/**
 * @param {string} char The char to search for
 * @param {string} str The string to be searched
 */
function occurrencesOf(char, str) {
    let count = 0;
    for (letter of str) {
        count += (letter === char) ? 1 : 0;
    }
    return count;
}

console.log(occurrencesOf("c", "occurrencesOf(char: string, str: string): number"));