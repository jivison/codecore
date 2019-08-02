function wordCounts(sentence) {
    let count = {};

    const punctuation = [",", ".", "?", "/", "!", "'", '"', ":", ";", "(", ")"];

    for (let word of sentence.trim().split(" ")) {
        for (let punc of punctuation) {
            word = word.replace(punc, "").toLowerCase();
        }
        count[word] ? (count[word] += 1) : (count[word] = 1);
    }
    return count;
}

function charCounts(string) {
    let count = {};
    for (let word of string.replace(/ /g).split("")) {
        count[word] ? (count[word] += 1) : (count[word] = 1);
    }
    return count;
}

function order(wordCountObj) {
    let items = Object.keys(wordCountObj).map(function(key) {
        return [key, wordCountObj[key]];
    });

    items.sort(function(first, second) {
        return second[1] - first[1];
    });

    return items;
}

function printOrdered(ordered) {
    for (let element of ordered.reverse()) {
        console.log(`${element[0].trim()} : ${element[1]}`);
    }
}

function reducedCount(string) {
    return [...string.replace(/ /g, "")].reduce((acc, value) => {
        acc[value] = acc[value] ? acc[value] + 1 : (acc[value] = 1);
        return acc;
    }, {});
}

const paragraph = `string string`;

console.log(reducedCount(paragraph));

// printOrdered(order(reducedCount(paragraph)));
