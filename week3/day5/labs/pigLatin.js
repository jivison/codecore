/**
 * 
 * @param {string} word The word to inspect
 * @return {string} Returns either consonantStart, vowelStart
 */
function determineType(word) {
    return (["a", "e", "i", "o", "u"].includes(word[0])) ? "vowelStart" : "consonantStart"
}

/**
 * 
 * @param {string} sentence The sentence to translate to pig latin
 * @returns {string} Returns the pig latin translation of the sentence
 */
function translate(sentence) {
    return sentence.split(" ").reduce((acc, val) => {
        let dot = false;
        if (val.includes(".")) {
            val = val.replace(".", "");
            dot = true
        }
        if (determineType(val) === "consonantStart") {
            acc += val.split("").slice(1).join("") + val[0] + "ay "
        } else {
            acc += val + ["ay", "way"][Math.floor(Math.random() * ["ay", "way"].length)] + " ";
        }

        return (dot) ? acc.trim() + ". " : acc;
    }, "");
}


console.log(translate("Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."));